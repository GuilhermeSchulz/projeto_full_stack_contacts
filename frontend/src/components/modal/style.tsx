import styled from "styled-components"
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-opacity);
  z-index: 5;
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
  form{
    overflow-y: auto;
  }
  @media (max-width: 768px) {
    width: 95%;
    flex-direction: column;
    height: 100%;
  }
`;