// Style your elements here
import styled from 'styled-components'

export const DirectionItem = styled.button`
  height: 40px;
  width: 80px;
  color: black;
  font-weight: bold;
  margin: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  opacity: ${props => (props.active === true ? 1 : 0.5)};
`

export const DirectionLi = styled.li`
  list-style-type: none;
  padding: 0;
`
