import React, { useEffect } from "react"
import { StyledCard } from "./styledCard"

const Card = ({ icon, time, temp, feels }) => {
  let clock = time.split(" ")
  console.log(icon)

  return (
    <StyledCard>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="weather-icon"
        alt="weather-icon"
      />
      <p className="time">Tid: {clock[1]}</p>
      <p className="temp">Temperatur: {temp} °C</p>
      <p className="temp">Känns som: {feels} °C</p>
    </StyledCard>
  )
}

export default Card
