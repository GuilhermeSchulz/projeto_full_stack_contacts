import styled from "styled-components"
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-opacity);
  z-index: 1;
  position: fixed;
  top: 0;
`;

export const ModalStyled = styled.div`
  display: flex;
  width: 800px;
  height: 90%;
  max-height: 600px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 30px;

  &&::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    overflow-y: auto;
    height: 100%;
    width: min-content;
  }
`;