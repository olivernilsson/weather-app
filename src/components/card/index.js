import React, { useEffect } from "react"
import { StyledCard } from "./style"

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
      <p className="time">Time: {clock[1]}</p>
      <p className="temp">Temperature: {temp} °C</p>
      <p className="temp">Feels like: {feels} °C</p>
    </StyledCard>
  )
}

export default Card
