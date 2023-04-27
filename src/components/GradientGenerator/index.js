// Write your code here
import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  GradientGeneratorContainer,
  DirectionUlContainer,
  Heading,
  Para,
  InputContainer,
  InputPara,
  Input,
  ButtonContainer,
  Button,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    initialColor1: '#8ae323',
    initialColor2: '#014f7b',
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    activeId: 'TOP',
  }

  onChangeColor1 = event => {
    this.setState({initialColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({initialColor2: event.target.value})
  }

  onClickGenerateButton = () => {
    const {initialColor1, initialColor2} = this.state
    this.setState({color1: initialColor1, color2: initialColor2})
  }

  onClickChangeDirection = (directionId, value) => {
    console.log(directionId, '----------onClickChangeDirection-----------')
    //   gradientDirectionsList
    this.setState({activeId: directionId, direction: value})
  }

  renderDirections = () => {
    const {activeId} = this.state
    return (
      <DirectionUlContainer>
        {gradientDirectionsList.map(eachItem => {
          console.log(activeId === eachItem.directionId)
          return (
            <GradientDirectionItem
              key={eachItem.directionId}
              details={eachItem}
              isActive={activeId === eachItem.directionId}
              onClickChangeDirection={this.onClickChangeDirection}
            />
          )
        })}
      </DirectionUlContainer>
    )
  }

  render() {
    const {color1, color2, direction, initialColor1, initialColor2} = this.state
    return (
      <GradientGeneratorContainer
        color1={color1}
        color2={color2}
        direction={direction}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>
        {this.renderDirections()}
        <Para>Pick the Colors</Para>

        <ButtonContainer>
          <InputContainer>
            <InputPara>{color1}</InputPara>
            <Input
              as="input"
              type="color"
              value={initialColor1}
              onChange={this.onChangeColor1}
            />
          </InputContainer>
          <InputContainer>
            <InputPara>{color2}</InputPara>
            <Input
              as="input"
              type="color"
              value={initialColor2}
              onChange={this.onChangeColor2}
            />
          </InputContainer>
        </ButtonContainer>
        <ButtonContainer>
          <Button onClick={this.onClickGenerateButton} type="button">
            Generate
          </Button>
        </ButtonContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
