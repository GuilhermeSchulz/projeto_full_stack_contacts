import { FormLogin } from "../components/formLogin";
import { StyledMain } from "../components/mainHomepage/style";


export const Homepage = () => {


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
