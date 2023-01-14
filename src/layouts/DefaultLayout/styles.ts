import styled from 'styled-components'

export const LayoutContainer = styled.div`
  overflow: hidden;
`

export const PageContent = styled.div`
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 6.5rem);

  & > * {
    max-width: 1120px;
    margin: 0 auto;
  }
`
