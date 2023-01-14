import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`

export const CheckoutFormContainer = styled.section`
  width: 40rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 0.938rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CheckoutInfoContainer = styled.aside`
  width: 28rem;
  padding: 2.5rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 0.938rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SubmitOrderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 1.5rem;
  width: 100%;
  padding: 0.75rem 0;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;

  cursor: pointer;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
