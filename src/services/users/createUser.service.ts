import { IUser, IUserReturn } from "./../../interfaces/users.interfaces";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { userWithoutPasswordSerializer } from "../../schemas/users.schemas";
import { AppError } from "../../errors/errors";

export const createUserService = async (
  userData: IUser
): Promise<IUserReturn> => {
  const userRepository = AppDataSource.getRepository(User);
  const verifyUser = await userRepository.findOneBy({
    email: userData.email,
  });
  if (verifyUser) {
    throw new AppError("User already exists", 409);
  }
  const createUser = userRepository.create(userData);

  await userRepository.save(createUser);

  const userReturnWithoutPass = await userWithoutPasswordSerializer.validate(
    createUser,
    {
      stripUnknown: true,
    }
  );

  return userReturnWithoutPass;
};
