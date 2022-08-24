import React from "react"
import Row from "./Row"


const Banner = () => {
   
   const rand = Math.ceil(Math.random() *  movies.length)
   return (
      <div className = "banner">
      <div className = "inner">
      <div className = "banner_buttons">
      <button>Play</button>
      <button>Pause</button>
      </div>
      </div>
      </div>
   )
   
}