import { StyledHeader } from "./style";
import { slide as Menu } from 'react-burger-menu'
import { Button } from "../Buttons/style";

export const Header = () => {


    return (
        <>
            <StyledHeader>
                <h1>TrueTies</h1>
                <div>
                    <Button className="button__color--yellow">
                        Profile
                    </Button>
                    <Button className="button__color--purple">
                        Logout
                    </Button>
                </div>
            </StyledHeader>
        </>
    );
};