import styled from "styled-components";

export const StyledFieldInput = styled.label`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: var(--text-size-2);
  color: var(--black);

  input {
    height: 78px;
    border-radius: 8px;
    background-color: var(--color-primary-1);
    color: var(--color-primary-2);
    border: 1px solid var(--color-primary-2);
    font-size: var(--text-size-1);
    padding: 10px 20px;

    &::placeholder {
      color: var(--color-primary-2);
      font-size: var(--text-size-1);
    }

    &:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border-color: var(--color-primary-hover);
    }
  }
`;
