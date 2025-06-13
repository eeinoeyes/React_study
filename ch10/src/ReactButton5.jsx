import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const ReactButton = (props) => {
   console.log(props)
   return <button className={props.className}>{props.children}</button>
   // 리액트 전통 방식으로 만든 컴포넌트를 wrapping하려면 className 지정하면 됨
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton5() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <br />
         <LargeButton>Large</LargeButton>
         <br />
         <ReactButton>React</ReactButton>
         <br />
         <ReactLargeButton>React Large</ReactLargeButton>
      </div>
   )
}

export default ReactButton5
