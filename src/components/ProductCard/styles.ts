import styled from 'styled-components'

export const CardContainer = styled.div`
  text-align: center;

  h4 {
    margin: 1rem 0 0.75rem;
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 130%;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    margin-bottom: 2rem;
  }
`

export const CardImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;
`

export const CardTags = styled.div`
  margin-top: 0.75rem;

  span + span {
    margin-left: 0.25rem;
  }

  span {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 130%;
    font-weight: 700;
    text-transform: uppercase;
  }
`

export const CardButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    margin-right: 1.438rem;
  }

  strong {
    font-size: 1.5rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
  }

  input {
    border-radius: 6px;
    width: 4.5rem;
    height: 2.375rem;
    border: none;
    background: ${(props) => props.theme['base-button']};
    padding-left: 1.625rem;
    margin-right: 0.5rem;
  }

  button {
    color: ${(props) => props.theme['base-card']};
    background-color: ${(props) => props.theme['purple-dark']};
    border: none;
    border-radius: 6px;
    padding: 0.5rem;
    height: 2.375rem;
    width: 2.375rem;
  }
`
