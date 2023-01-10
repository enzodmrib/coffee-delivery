import styled from 'styled-components'

export const IntroContainer = styled.section`
  margin: 5.875rem 0 6.75rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
`

export const HomeInfoContainer = styled.div``

export const HomeInfoTitle = styled.div`
  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    line-height: 130%;
    font-size: 1.25rem;
  }
`

export const HomeInfoList = styled.ul`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;

  li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
  }
`

const ICON_COLORS = {
  orange: 'yellow-dark',
  yellow: 'yellow',
  brown: 'base-text',
  purple: 'purple',
} as const

interface IconContainerProps {
  backgroundColor: keyof typeof ICON_COLORS
}

export const IconContainer = styled.span<IconContainerProps>`
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
  border-radius: 999px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[ICON_COLORS[props.backgroundColor]]};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HomeImage = styled.img`
  height: 22.5rem;
  width: 29.75rem;
`
