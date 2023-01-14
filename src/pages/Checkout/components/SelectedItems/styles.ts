import styled from 'styled-components'

export const SelectedItemsContainer = styled.div`
  hr {
    margin: 1.5rem 0;
    border: 1px solid ${(props) => props.theme['base-button']};
    background-color: ${(props) => props.theme['base-button']};
  }
`
