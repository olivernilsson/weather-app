import React, { useEffect, useState } from "react"
import Header from "./components/header"
import Display from "./components/display"
import { createGlobalStyle } from "styled-components"

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

  useEffect(() => {
    const getData = async () => {
      const raw = await fetch(
        "http://api.openweathermap.org/data/2.5/forecast?id=2692969&units=metric&cnt=4&APPID=ee38411b8e8d4549832df84d31803c99",
      )
      const result = await raw.json()
      await setWeatherData(result)
      console.log(result)
    }
    getData()
  }, [])

  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <div className="App">
        <Header
          city={weatherData ? weatherData.city : ""}
          setCity={setWeatherData}
        />
        {weatherData ? (
          <Display data={weatherData}></Display>
        ) : (
          <p>Laddar...</p>
        )}
      </div>
    </React.Fragment>
  )
}

export default App
