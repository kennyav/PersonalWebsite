import React, { useState, useEffect } from 'react'

import Character from "./Character"

export default function CharacterController() {

   let topValue = 10;
   let leftValue = 10;


   // useState is neccessary because when the states are changed is triggers a rerender in react, which redraws the character
   // in a new position
   const [top, setTop] = useState(topValue + "em");
   const [left, setLeft] = useState(leftValue + "em")


   // logic for the positioning of the character depending on which button is pressed
   const handleKeyDown = (key) => {

      if (key === "w") {
         topValue = topValue - 1;
         setTop(topValue + "em");
      }
      if (key === "s") {
         topValue = topValue + 1;
         setTop(topValue + "em");
      }
      if (key === "a") {
         leftValue = leftValue - 1;
         setLeft(leftValue + "em");
      }
      if (key === "d") {
         leftValue = leftValue + 1;
         setLeft(leftValue + "em");
      }
   }

   useEffect(() => {
      document.addEventListener('keydown', (e) => handleKeyDown(e.key), true);
   }, [])
   

   return (
      <Character
         top={top}
         left={left} />
   )
}
