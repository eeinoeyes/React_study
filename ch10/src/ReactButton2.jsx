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

function ReactButton2() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
      </div>
   )
}

export default ReactButton2
