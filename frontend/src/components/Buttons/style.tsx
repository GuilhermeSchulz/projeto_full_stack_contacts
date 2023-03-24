import styled from 'styled-components';

export const Button = styled.button`
  height: 78px;
  border-radius: 8px;
  border: 1px solid var(--color-primary-1);
  color: var(--color-primary-1);
  font-size: var(--text-size-1);
  padding: 10px 20px;

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
      background-color: var(--color-primary-1);
    }
  }

  &&.button__size--large {
    width: 100%;
    max-width: 500px;
  }
  &&.button__size--medium {
    width: 100%;
    max-width: 350px;
  }
  &&.button__size--small {
    width: 100%;
    max-width: 120px;
  }
`;
