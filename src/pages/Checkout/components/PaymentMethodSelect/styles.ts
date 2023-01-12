import styled from 'styled-components'

export const SelectContainer = styled.div`
  padding: 2.5rem;

  & > div + div {
    margin-top: 2rem;
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

interface OptionProps {
  selected: boolean
}

export const OptionButton = styled.button<OptionProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  width: 11.167rem;
  height: 3.188rem;
  padding: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 160%;

  cursor: pointer;
  border: ${(props) =>
    props.selected
      ? `1px solid ${props.theme.purple}`
      : '1px solid transparent'};
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['purple-light']};

  transition: background 0.2s, border-color 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
