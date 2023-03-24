import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  height: 92%;
  background-color: rgba(115, 89, 114, 0.74);
  box-shadow: var(--box-shadow);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  border-radius: var(--border-radius-1);
  flex-wrap: wrap;
  gap: 1rem;
  overflow-y: auto;
  li {
    border: 2px solid var(--color-primary-2);
    padding: 0.5rem;
    border-radius: var(--border-radius-1);
    color: var(--color-primary-2);
    img {
      width: 200px;
      height: 150px;
    }
  }
`;
