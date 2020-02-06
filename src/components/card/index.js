import React, { useEffect } from "react"
import { StyledCard } from "./style"

const Card = ({ icon, time, temp, feels, shouldSplit }) => {
  let clock = time
  if (shouldSplit) {
    clock = time.split(" ")
  }
  console.log(icon)

  return (
    <StyledCard>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        className="weather-icon"
        alt="weather-icon"
      />
      <p className="time">Time: {shouldSplit ? clock[1] : clock}</p>
      <p className="temp">Temperature: {temp} °C</p>
      <p className="temp">Feels like: {feels} °C</p>
    </StyledCard>
  )
}

export default Card
