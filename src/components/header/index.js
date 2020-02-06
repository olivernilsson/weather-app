import React from "react"
import { StyledHeaderWrapper, StyledHeaderText } from "./style"
import SearchBar from "../searchBar"

const Header = props => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderText>
        Weather for: {props.city.name}, {props.city.country}
      </StyledHeaderText>
      <SearchBar setCity={props.setCity} isHour={props.isHour}></SearchBar>
    </StyledHeaderWrapper>
  )
}

export default Header
