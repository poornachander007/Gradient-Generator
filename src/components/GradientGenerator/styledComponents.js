// Style your elements here
import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  //   background-image: linear-gradient(to top, red, green);
  background-size: cover;
`

export const Heading = styled.h1`
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
`
export const Para = styled.p`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
`
export const InputPara = styled(Para)`
  font-size: 15px;
`

export const Input = styled.button`
  height: 40px;
  width: 90px;
  padding: 0px;
  outline: none;
  border: none;
  background-color: transparent;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px;
  background-color: aqua;
  color: black;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`

export const DirectionUlContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
`
