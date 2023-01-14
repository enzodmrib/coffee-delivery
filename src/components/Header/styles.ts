import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;
`

export const HeaderElements = styled.div`
  max-width: 1120px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  & > img {
    cursor: pointer;
  }
`

export const HeaderImage = styled.img`
  height: 2.5rem;
`

export const HeaderAside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const AddressBadge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;
  position: relative;
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  span {
    position: absolute;
    top: -0.625rem;
    right: -0.625rem;

    display: inline-block;
    line-height: 10px;
    padding: 0.3rem;
    border-radius: 9999px;
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
    height: 1.25rem;
    width: 1.25rem;
    font-size: 12px;
  }
`
