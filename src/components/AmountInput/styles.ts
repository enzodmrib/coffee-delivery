import styled from 'styled-components'

export const AmountInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.344rem 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};

  span {
    line-height: 130%;
    width: 1.25rem;
    text-align: center;
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    color: ${(props) => props.theme.purple};

    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
