import styled from 'styled-components'

/*
styled-components: 스타일이 있는 컴포넌트 (변수명 대문자)
백틱 안에 CSS 작성
구조는 일반 CSS랑 똑같이~
*/

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
// 여기에 있는 걸 싹~~ 다 포함해서

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
//font-size만 추가해 하나의 스타일 새로 생성!!

const StyleDiv = styled.div`
   width: 100px;
   height: 100px;
   border: 1px solid green;
   margin: 10px;
`

function ReactButton3() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <br />
         <LargeButton>Large</LargeButton>
         <br />
         <StyleDiv></StyleDiv>
      </div>
   )
}

export default ReactButton3
