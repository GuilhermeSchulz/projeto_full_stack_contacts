import { ReactNode } from "react"
import { Background, ModalStyled } from "./style"

type Props = {

    children: React.ReactNode;
};
export const Modal = ({ children }: Props) => {



    return (
        <Background>
            <ModalStyled>
                {children}
            </ModalStyled>
        </Background>
    )
}