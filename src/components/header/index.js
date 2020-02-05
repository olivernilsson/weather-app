import React from "react"
import { StyledHeaderWrapper, StyledHeaderText } from "./style"
import SearchBar from "../searchBar"

const Header = props => {
  console.log(props)
  return (
    <StyledHeaderWrapper>
      <StyledHeaderText>
        Väder för: {props.city.name}, {props.city.country}
      </StyledHeaderText>
      <SearchBar setCity={props.setCity}></SearchBar>
    </StyledHeaderWrapper>
  )
}

export default Header
