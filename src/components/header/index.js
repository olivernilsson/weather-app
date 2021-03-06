import React from "react"
import { StyledHeaderWrapper, StyledHeaderText } from "./style"
import SearchBar from "../searchBar"

const Header = props => {
  console.log(props)
  return (
    <StyledHeaderWrapper>
      <StyledHeaderText>
        Weather for: {props.city.name}, {props.city.country}
      </StyledHeaderText>
      <SearchBar
        setCity={props.setCity}
        setSearchTerm={props.setSearchTerm}
        notFound={props.notFound}
        isHour={props.isHour}
      ></SearchBar>
    </StyledHeaderWrapper>
  )
}

export default Header
