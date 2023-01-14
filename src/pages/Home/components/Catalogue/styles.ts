import styled from 'styled-components'

export const CatalogueContainer = styled.section``

export const CatalogueTitle = styled.h2`
  font-size: 2.625rem;
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 9.813rem;
`
