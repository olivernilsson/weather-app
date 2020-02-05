import React, { useRef, useEffect } from "react"
//import { useHistory } from "react-router-dom"
import { SearchBarWrapper, Input } from "./style"
import SearchButton from "../searchButton"

const SearchBar = props => {
  const ref = useRef()

  useEffect(() => {
    if (window.history.state) {
      clickHandler()
    }
  }, [])

  const clickHandler = async () => {
    const raw = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${ref.current.value}&units=metric&cnt=4&APPID=ee38411b8e8d4549832df84d31803c99`,
    )
    const response = await raw.json()
    await console.log(response)
    await props.setCity(response)
  }

  return (
    <SearchBarWrapper
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Input ref={ref}></Input>
      <SearchButton clickHandler={clickHandler} />
    </SearchBarWrapper>
  )
}

export default SearchBar
