import styled from 'styled-components'

export const SubtotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  color: ${(props) => props.theme['base-text']};

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:first-child {
      font-size: 0.875rem;
    }
  }

  strong {
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
