import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    font-family: 'Sono', sans-serif;
    list-style:none;
    box-sizing: border-box;
}
body.modal-open {
  overflow: hidden; /* see "modal-open" in Modal.tsx */
}

button{
    cursor:pointer;
    transition: 0.5s;
}
a{
  cursor:pointer
}

:root{
    --color-primary-1: #70506D;
    --color-primary-2: #FCE1AD;
    --color-primary-hover: #FBB88B;

    --color-secondary-1:#EE7C77;
    --color-secondary-2:#C4A691;


    --white: #FFFFFF;
    --black: #000000;
   
    --title-size-1: 48px;
    --title-size-2: 40px;

    --text-size-1: 24px;
    --text-size-2: 20px;

    --text-weight-1: 700;
    --text-weight-2: 600;
    --text-weight-3: 500;
    --text-weight-4: 400;

    --border-radius-1: 8px;
    --border-radius-2: 16px;

    --box-shadow: 0px 4px 10px 6px rgba(0, 0, 0, 0.25);
    --button-hover-shadow: 0px 1px 29px 17px #EE7C77;
    --black-opacity: #00000050
}

::-webkit-scrollbar {
    background-color: var(--grey-4);
    height: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-primary-1);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--color-primary-hover);
    border-radius: 4px;
  }
`;
