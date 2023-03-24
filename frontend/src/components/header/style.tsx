import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: rgba(115, 89, 114, 0.74);
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  h1 {
    font-size: var(--title-size-2);
    font-weight: var(--text-weight-1);
    color: white;
  }
  div {
    display: flex;
    gap: 1rem;
  }
`;
