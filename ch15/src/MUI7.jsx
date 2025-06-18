import Button from '@mui/material/Button'
import { useState } from 'react'
function MUI7() {
   const [color, setColor] = useState('primary')
   const handleClick = () => {
      setColor((prevState) => {
         console.log(prevState)
         return prevState === 'primary' ? 'secondary' : 'primary'
      })
   }

   return (
      <>
         <Button variant="contained" color={color} onClick={handleClick}>
            버튼
         </Button>
      </>
   )
}

export default MUI7
