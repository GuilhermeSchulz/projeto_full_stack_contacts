import { Button } from "../components/Buttons/style";
import { Header } from "../components/header";
import { StyledMainDash } from "../components/mainDashboard/style";
import placeholder from "../assets/img/MdImageNotSupported.svg";
import { StyledList } from "../components/List/style";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUser } from "../interfaces/userInterfaces";
import { StyledFieldInput } from "../components/input/style";
import { schemaUpdate } from "../schemas/schemas";
import { Modal } from "../components/modal";
import { Container } from "../components/FormContainers/style";

export const Dashboard = () => {
  const { profile, onSubmitUpdate, setProfile, onSubmitDelete } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({ resolver: yupResolver(schemaUpdate) });
  const closeModalProfile = () => {
    setProfile(!profile);
  };
  return (
    <StyledMainDash>
      <Header />
      <section>
        <div>
          <h2>Contacts</h2>
          <Button className="button__color--yellow">Add Contact</Button>
        </div>
        <StyledList></StyledList>
      </section>
      {profile ? (
        <Modal>
          <Container>
            <span onClick={closeModalProfile}>x</span>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit(onSubmitUpdate)}>
              <StyledFieldInput>
                Name:
                <input
                  type="text"
                  placeholder="Insert your name"
                  {...register("name")}
                ></input>
                <span className="error">{errors.name?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Email:
                <input
                  type="email"
                  placeholder="Insert your email"
                  {...register("email")}
                ></input>
                <span className="error">{errors.email?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Password:
                <input
                  type="Password"
                  placeholder="Insert your password"
                  {...register("password")}
                ></input>
                <span className="error">{errors.password?.message}</span>
              </StyledFieldInput>
              <StyledFieldInput>
                Phone:
                <input
                  type="text"
                  placeholder="Insert your phone number"
                  {...register("phone")}
                ></input>
                <span className="error">{errors.phone?.message}</span>
              </StyledFieldInput>
              <Button className="button__color--yellow ">Update Infos</Button>
            </form>
            <Button className="button__color--purple " onClick={onSubmitDelete}>Delete Account</Button>
          </Container>
        </Modal>
      ) : (
        <></>
      )}
    </StyledMainDash>
  );
};
