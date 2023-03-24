import { Button } from "../components/Buttons/style";
import { Header } from "../components/header";
import { StyledMainDash } from "../components/mainDashboard/style";
import placeholder from "../assets/img/MdImageNotSupported.svg"
import { StyledList } from "../components/List/style";

export const Dashboard = () => {


  return (
    <StyledMainDash>
      <Header />
      <section>
        <div>
          <h2>Contacts</h2>
          <Button className="button__color--yellow">Add Contact</Button>
        </div>
        <StyledList>

        </StyledList>
      </section>
    </StyledMainDash>
  );
};
