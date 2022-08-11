import React from 'react'

export default function Character(props) {

   let style = {
      character: {
         width:"50px",
         height:"50px",
         backgroundColor:"red",
         position:"absolute",
         top:props.top,
         left:props.left,
      }
   }

  return (
    <div style={style.character}>
      O      O
      ----
    </div>
  )
}
