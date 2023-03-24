import styled from "styled-components";

export const Container = styled.div`
width: 90%;
height: max-content;
background-color: rgba(115, 89, 114, 0.74);
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
max-width: 500px;
padding: 30px 10px ;
gap: 1rem;
border-radius: var(--border-radius-2);
box-shadow: var(--box-shadow);
color: white;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
}
a{
    color: var(--color-primary-hover);
}

`