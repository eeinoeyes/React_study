// css적용방법 3. sx props 사용 (json객체 형태)
import Box from '@mui/material/Box'

function MUI2_3() {
   return (
      <Box
         sx={{
            width: '100px',
            height: '100px',
            backgroundColor: 'skyblue',
            '&:hover': {
               //&: 현재 컴포넌트
               backgroundColor: 'red',
            },
         }}
      >
         hover to change color
      </Box>
   )
}

export default MUI2_3
