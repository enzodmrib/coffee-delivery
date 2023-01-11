import styled from 'styled-components'

export const OrderInputsContainer = styled.div`
  & > div + div {
    margin-top: 0.75rem;
  }
`
export const AddressFormFieldsContainer = styled.div`
  padding: 2.5rem;
`

export const TextIconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;

  margin-bottom: 2rem;

  h2 {
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 1fr 3.75rem;
  gap: 1rem;

  input[placeholder='Rua'] {
    grid-column: 1 / span 3;
  }

  input[aria-colspan='2'] {
    grid-column: 2 / span 2;
  }
`

export const Input = styled.input`
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
`
