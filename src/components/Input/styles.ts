import styled from 'styled-components'

export const TextInput = styled.input`
  height: 2.625rem;
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};

  transition: border-color 0.2s;

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &[aria-colspan='3'] {
    grid-column: 1 / span 3;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.75rem;
  height: 2.625rem;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-input']};

  transition: border-color 0.2s;

  input {
    padding: 0;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
  }

  i {
    display: none;
  }

  input:placeholder-shown + i {
    display: inline;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &:has(input[aria-colspan='2']) {
    grid-column: 2 / span 2;
  }
`
