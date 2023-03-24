import styled from "styled-components";
import bgDash from "../../assets/img/bgdash.jpg";

export const StyledMainDash = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgDash});
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  section {
    height: 90%;
    width: 100%;
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    div {
        display: flex;
        gap: 2rem;
      h2 {
        font-size: var(--title-size-2);
        font-weight: var(--text-weight-1);
        color: white;
      }
      button {
        max-width: 300px;
      }
    }
  }
`;
