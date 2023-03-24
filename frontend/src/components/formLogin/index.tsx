import { useState } from "react";
import { Button } from "../Buttons/style"
import { Container } from "../FormContainers/style"
import { StyledFieldInput } from "../input/style"

export const FormLogin = () => {
    const [register, setRegister] = useState(false);

    const HandleRegister = () => {
        setRegister(!register);
    }


    return (
        <>
            {
                register ?
                    (
                        <Container>
                            <h2>Register</h2>
                            <form action="submit">
                                <StyledFieldInput>
                                    Name:
                                    <input type="text" placeholder="Insert your name"></input>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Email:
                                    <input type="email" placeholder="Insert your email"></input>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Password:
                                    <input type="Password" placeholder="Insert your password"></input>
                                </StyledFieldInput>
                                <StyledFieldInput>
                                    Phone:
                                    <input type="text" placeholder="Insert your phone number"></input>
                                </StyledFieldInput>
                                <Button className="button__color--yellow ">Login</Button>
                            </form>
                            <span>Already have an account? <a onClick={HandleRegister}>Back to Login!</a></span>
                        </Container>
                    )
                    :
                    (<Container>
                        <h2>Login</h2>
                        <form action="submit">
                            <StyledFieldInput>
                                Email:
                                <input type="email" placeholder="Insert your email"></input>
                            </StyledFieldInput>
                            <StyledFieldInput>
                                Password:
                                <input type="Password" placeholder="Insert your password"></input>
                            </StyledFieldInput>
                            <Button className="button__color--yellow ">Login</Button>
                        </form>
                        <span>Doesnt have an account? <a onClick={HandleRegister}>Register now!</a></span>
                    </Container>)

            }

        </>
    )
}