import React, { useRef, useEffect, useState } from "react"
import { SearchBarWrapper, Input, NotFound } from "./style"
import SearchButton from "../searchButton"

const SearchBar = props => {
  const ref = useRef()

  const clickHandler = async () => {
    props.setSearchTerm(ref.current.value)
  }

  return (
    <SearchBarWrapper
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Input ref={ref}></Input>
      <SearchButton clickHandler={clickHandler} />
      <NotFound>{props.notFound ? "Could not find location" : ""}</NotFound>
    </SearchBarWrapper>
  )
}

export default SearchBar
