import styled from 'styled-components'

export const SuccessContainer = styled.main`
  & > h1 {
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    font-weight: 800;
  }

  & > p {
    margin-top: 0.25rem;
    margin-bottom: 2.5rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 6.375rem;

    & > img {
      width: 30.75rem;
      height: 18.313rem;
    }
  }
`

export const GradientBox = styled.div`
  background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  width: 32.875rem;
  height: 18.5rem;
  border-radius: 6px 36px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const OrderInfoBox = styled.ul`
  color: ${(props) => props.theme['base-text']};
  border-radius: inherit;

  padding: 2.5rem;
  width: 32.75rem;
  height: 18.375rem;
  background: ${(props) => props.theme.white};

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
