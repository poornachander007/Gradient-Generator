// Write your code here
import {DirectionItem, DirectionLi} from './styledComponents'

const GradientDirectionItem = props => {
  const {details, onClickChangeDirection, isActive} = props
  const {directionId, value, displayText} = details
  const onClickToggleButton = () => {
    console.log('----------onClickToggleButton-----------')
    onClickChangeDirection(directionId, value)
  }
  return (
    <DirectionLi key={directionId}>
      <DirectionItem
        active={isActive}
        value={value}
        onClick={onClickToggleButton}
      >
        {displayText}
      </DirectionItem>
    </DirectionLi>
  )
}

export default GradientDirectionItem
