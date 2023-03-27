import { FormLogin } from "../components/formLogin";
import { StyledMain } from "../components/mainHomepage/style";
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/userContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const Homepage = () => {
  const { token } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = () => {
      if (token) {
        navigate("/dashboard/")
      }
    }
    isLogged()
  }, [token])

  return (
    <>
      <StyledMain>
        <section>
          <h1>True Ties</h1>
          <p>Stay connected with your True Ties</p>
        </section>
        <FormLogin />
      </StyledMain>
    </>
  );
};
