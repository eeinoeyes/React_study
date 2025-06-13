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
   return <button>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <br />
         <LargeButton>Large</LargeButton>
         <br />
         <ReactButton>React</ReactButton>
         <br />
         <ReactLargeButton>Large</ReactLargeButton>
      </div>
   )
}

export default ReactButton4
