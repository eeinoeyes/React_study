import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: 'gray',
   border: '1px solid black',
   padding: theme.spacing(2),
   textAlign: 'center',
}))

function MUI4() {
   return (
      <Container maxWidth="md" sx={{ backgroundColor: 'skyblue' }}>
         <Grid container>
            {/* container: 부모 그리드 역할 표시 */}
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs: 6, md: 8</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs: 6, md: 4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
               <Item>xs: 6, md: 4</Item>
            </Grid>
            <Grid size={{ xs: 6, md: 8 }}>
               <Item>xs: 6, md: 8</Item>
            </Grid>
         </Grid>
      </Container>
   )
}

export default MUI4
