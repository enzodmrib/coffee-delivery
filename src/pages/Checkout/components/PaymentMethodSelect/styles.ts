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

export const OptionButton = styled.button`
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

  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['purple-light']};
`
