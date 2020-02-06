import React from "react"
import { StyledDisplay } from "./style"
import Card from "../card"

const Display = ({ data }) => {
  console.log("list", data.list)
  let filteredData = data.list
  let shouldSplit = true
  if (filteredData.length > 5) {
    filteredData = data.list.filter(function(value, index, Arr) {
      return index % 8 === 0
    })
    shouldSplit = false
  }
  return (
    <StyledDisplay>
      {filteredData.map((card, index) => {
        return (
          <Card
            icon={card.weather[0].icon}
            temp={card.main.temp}
            feels={card.main.feels_like}
            time={card.dt_txt}
            shouldSplit={shouldSplit}
            key={index}
          ></Card>
        )
      })}
    </StyledDisplay>
  )
}

export default Display
