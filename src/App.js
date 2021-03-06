import React, { useEffect, useState } from "react"
import Header from "./components/header"
import Display from "./components/display"
import { createGlobalStyle } from "styled-components"
import Switch from "react-switch"

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    background: #34495e;
    margin: 0;
    height:100vh;
    width: 100vw;
    overflow: hidden;
    padding-left: calc(100vw - 100%);
  }
  `

  const [weatherData, setWeatherData] = useState()
  const [isHour, setIsHour] = useState(true)
  const [searchTerm, setSearchTerm] = useState("malmö")
  const [notFound, setNotFound] = useState(false)
  const [notCurrentModeData, setNotCurrentModeData] = useState()

  useEffect(() => {
    const getData = async () => {
      await setNotFound(false)
      const raw = await fetch(
        isHour
          ? `http://api.openweathermap.org/data/2.5/forecast?${
              searchTerm ? `q=${searchTerm}` : ""
            }&units=metric&cnt=5&APPID=ee38411b8e8d4549832df84d31803c99`
          : `http://api.openweathermap.org/data/2.5/forecast?${
              searchTerm ? `q=${searchTerm}` : ""
            }&units=metric&APPID=ee38411b8e8d4549832df84d31803c99`,
      )
      const result = await raw.json()
      result.city ? await setWeatherData(result) : await setNotFound(true)
      console.log(result)
    }
    getData()
  }, [isHour, searchTerm])

  const handleChange = () => {
    setIsHour(!isHour)
    setNotCurrentModeData(weatherData)
  }

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Header
          city={weatherData ? weatherData.city : ""}
          setCity={setWeatherData}
          setSearchTerm={setSearchTerm}
          notFound={notFound}
          isHour={isHour}
        />
        {weatherData ? (
          <Display data={weatherData}></Display>
        ) : (
          <p>Laddar...</p>
        )}
        <div style={{ textAlign: "center" }}>
          <Switch
            onChange={handleChange}
            checked={!isHour}
            checkedIcon={
              <span
                style={{
                  fontFamily: "Roboto",
                  position: "absolute",
                  top: "4px",
                  left: "12px",
                }}
              >
                D
              </span>
            }
            uncheckedIcon={
              <span
                style={{
                  fontFamily: "Roboto",
                  position: "absolute",
                  top: "4px",
                  left: "7px",
                }}
              >
                H
              </span>
            }
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
