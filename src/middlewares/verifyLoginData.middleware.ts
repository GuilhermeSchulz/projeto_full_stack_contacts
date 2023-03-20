import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

export const verifyLogin = async(req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const verifyIfUser = await userRepository.findBy({email: req.body.email})
    if(!verifyIfUser?.length){
        return res.status(400).json({
            message: "User Does Not Exist"
        })
    }
    return next()
}