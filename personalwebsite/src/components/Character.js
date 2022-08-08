import React, {useEffect} from 'react'

// position variables
let top = "10em"
let bottom = "10em";
let left = "10em";
let right = "10em";

export default function Character() {

   useEffect(() => {
      document.addEventListener('keydown', handleKeyDown, true)
   }, [])
   
   const handleKeyDown = (e) => {
      if (e.key === "w") {
         let newValue = Number(bottom.replace(/\D/g, "")) + 1;
         bottom = newValue + "em";

         console.log("bottom", bottom)
      }
   }

   let style = {
      character: {
         width:"50px",
         height:"50px",
         backgroundColor:"red",
         position:"absolute",
         top:top,
         bottom:bottom,
         left:left,
         right:right
      }
   }
  return (
    <div style={style.character}>
    </div>
  )
}
