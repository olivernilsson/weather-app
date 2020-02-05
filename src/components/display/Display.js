import React from "react"
import { StyledDisplay } from "./styledDisplay"
import Card from "../card/Card"

const Display = ({ data }) => {
  console.log(data.list)
  return (
    <StyledDisplay>
      {data.list.map((card, index) => {
        return (
          <Card
            icon={card.weather[0].icon}
            temp={card.main.temp}
            feels={card.main.feels_like}
            time={card.dt_txt}
            key={index}
          ></Card>
        )
      })}
    </StyledDisplay>
  )
}

export default Display
