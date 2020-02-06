import React, { useRef, useEffect, useState } from "react"
import { SearchBarWrapper, Input, NotFound } from "./style"
import SearchButton from "../searchButton"

const SearchBar = props => {
  const ref = useRef()

  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (window.history.state) {
      clickHandler()
    }
  }, [])

  const clickHandler = async () => {
    setNotFound(false)
    const raw = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${ref.current.value}&units=metric&cnt=5&APPID=ee38411b8e8d4549832df84d31803c99`,
    )
    const response = await raw.json()
    await console.log(response)
    response.city ? await props.setCity(response) : setNotFound(true)
  }

  return (
    <SearchBarWrapper
      onSubmit={e => {
        e.preventDefault()
      }}
    >
      <Input ref={ref}></Input>
      <SearchButton clickHandler={clickHandler} />
      <NotFound>{notFound ? "Could not find location" : ""}</NotFound>
    </SearchBarWrapper>
  )
}

export default SearchBar
