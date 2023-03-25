import { StyledHeader } from "./style";
import { Button } from "../Buttons/style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react"


export const Header = () => {
    const navigate = useNavigate()
    const exitButton = () => {
        window.localStorage.clear();
        navigate("/")
    };
    const { setProfile } = useContext(UserContext)
    const handleProfile = () => {
        setProfile(true)
    }
    return (
        <>
            <StyledHeader>
                <h1>TrueTies</h1>
                <div>
                    <Button className="button__color--yellow" onClick={handleProfile}>
                        Profile
                    </Button>
                    <Button className="button__color--purple" onClick={exitButton}>
                        Logout
                    </Button>
                </div>
            </StyledHeader>
        </>
    );
};