import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/userContext";
import { IUser, IUserLogin } from "../../interfaces/userInterfaces";
import { schemaLogin, schemaRegister } from "../../schemas/schemas";
import { Button } from "../Buttons/style"
import { Container } from "../FormContainers/style"
import { StyledFieldInput } from "../input/style"
import { yupResolver } from "@hookform/resolvers/yup";

export const FormLogin = () => {
    const { onSubmitLogin } = useContext(UserContext)
    const { onSubmitSignUp } = useContext(UserContext)
    const { login } = useContext(UserContext)
    const { setLogin } = useContext(UserContext)

    const HandleRegister = () => {
        setLogin(!login);
    }


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IUser & IUserLogin>({ resolver: !login ? yupResolver(schemaRegister) : yupResolver(schemaLogin) });

    return (
        <>
            {
                !login ?
                    (
                        <Container>
                            <h2>Register</h2>
                            <form onSubmit={handleSubmit(onSubmitSignUp)}>
                                <StyledFieldInput>
                                    Name:
                                    <input type="text" placeholder="Insert your name" {...register("name")}></input>
                                    <p className="error">{errors.name?.message}</p>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Email:
                                    <input type="email" placeholder="Insert your email" {...register("email")}></input>
                                    <p className="error">{errors.email?.message}</p>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Password:
                                    <input type="Password" placeholder="Insert your password" {...register("password")}></input>
                                    <p className="error">{errors.password?.message}</p>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Phone:
                                    <input type="text" placeholder="Insert your phone number" {...register("phone")}></input>
                                    <p className="error">{errors.phone?.message}</p>
                                </StyledFieldInput>
                                <Button className="button__color--yellow ">Register</Button>
                            </form>
                            <p>Already have an account? <a onClick={HandleRegister}>Back to Login!</a></p>
                        </Container>
                    )
                    :
                    (<Container>
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit(onSubmitLogin)}>
                            <StyledFieldInput>
                                Email:
                                <input type="email" placeholder="Insert your email" {...register("email")}></input>
                                <p className="error">{errors.email?.message}</p>
                            </StyledFieldInput>
                            <StyledFieldInput>
                                Password:
                                <input type="Password" placeholder="Insert your password" {...register("password")}></input>
                                <p className="error">{errors.password?.message}</p>
                            </StyledFieldInput>
                            <Button className="button__color--yellow ">Login</Button>
                        </form>
                        <p>Doesnt have an account? <a onClick={HandleRegister}>Register now!</a></p>
                    </Container>)

            }

        </>
    )
}