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

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 0.938rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
