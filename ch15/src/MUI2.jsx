import Button from '@mui/material/Button'
import './MUI2.css'
function MUI2() {
   return (
      <div>
         <Button className="btn1" variant="text">
            Text
         </Button>
         <Button className="btn2" variant="contained">
            Contained
         </Button>
         <Button className="btn3" variant="outlined">
            Outlined
         </Button>
      </div>
   )
}

export default MUI2
