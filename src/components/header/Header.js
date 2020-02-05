import React from "react"
import { StyledHeaderWrapper, StyledHeaderText } from "./StyledHeader"

const Header = props => {
  console.log(props)
  return (
    <StyledHeaderWrapper>
      <StyledHeaderText>
        Väder för: {props.city.name}, {props.city.country}
      </StyledHeaderText>
    </StyledHeaderWrapper>
  )
}

export default Header
