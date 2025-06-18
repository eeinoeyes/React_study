// styled 사용
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'

const CustomButton = styled(Button)(({ theme }) => {
   //theme 객체는 MUI컴포넌트 전체에 공통적으로 적용되는 디자인 시스템 정보를 가지고 있음 -> 협업시 통일성 깨뜨리지 않음
   return {
      backgroundColor: 'gray',
      color: 'black',
      padding: theme.spacing(2),
      '&:hover': {
         backgroundColor: 'black',
         color: 'white',
      },
   }
})

function MUI2_4() {
   return <CustomButton>버튼</CustomButton>
}

export default MUI2_4
