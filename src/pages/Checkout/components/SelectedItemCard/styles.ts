import styled from 'styled-components'

export const SelectedItemCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  padding: 0.5rem 0.25rem;

  img {
    height: 4rem;
    width: 4rem;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }
`

export const SelectedItemCardOptions = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveItemButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  height: 2rem;
  padding: 0.406rem 0.5rem;

  font-size: 0.75rem;
  line-height: 160%;

  cursor: pointer;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  & > span {
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    text-transform: uppercase;
  }
`
