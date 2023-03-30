import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: 92%;
  background-color: rgba(115, 89, 114, 0.74);
  box-shadow: var(--box-shadow);
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border-radius: var(--border-radius-1);
  flex-wrap: wrap;
  gap: 1rem;
  overflow-y: auto;
  max-width: 1400px;
  h3{
    width: 100%;
    text-align: center;
    color: white;
  }
  li {
    border: 2px solid var(--color-primary-2);
    padding: 0.5rem;
    border-radius: var(--border-radius-1);
    color: var(--color-primary-2);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    width: 290px;
align-items: center;
    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
    }
    p{
      height: 30px;
    }
  }
`;
