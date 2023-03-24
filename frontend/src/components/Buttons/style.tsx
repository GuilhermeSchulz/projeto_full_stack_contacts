import styled from 'styled-components';

export const Button = styled.button`
  height: 50px;
  border-radius: 8px;
  border: 1px solid var(--color-primary-1);
  color: var(--color-primary-1);
  font-size: var(--text-size-2);
  padding: 10px 20px;
  width: 90%;
  &&.button__color--yellow {
    background-color: var(--color-primary-2);

    &:hover {
      background-color: var(--color-primary-hover);
      box-shadow: var(--button-hover-shadow);
    }
  }

  &&.button__color--purple {
    background-color: var(--color-primary-1);
    color: var(--color-primary-2);
    border: 1px solid var(--color-primary-2);
    &:hover {
      background-color: var(--color-primary-2);
      color: var(--color-primary-1);
    }
  }

`;
