import styled from "styled-components";
import bgHome from "../../assets/img/bghome.jpg"


export const StyledMain = styled.main`
    width: 100vw;
    height: 100vh;
    background-image: url(${bgHome});
    display: flex;
    justify-content: space-around;
    align-items: center;
    section{
        width: 40%;
        height: 100%;
        padding: 1rem;
        padding-top: 150px;
        text-align: center;
        h1{
            font-size: var(--title-size-1);
            font-weight: var(--text-weight-1);
            color: white;
        }
        p{
            font-size: var(--title-size-1);
            font-weight: var(--text-weight-4);
            color: white;
        }

    }
    @media (max-width: 730px) {
        flex-direction: column;
        justify-content: unset;
        gap: 1rem;
        background-position: center;
        section{

            width: 100%;
            height: max-content;
            
            padding-top: 50px;
            p{
                display: none;
            }
        }
    }

`