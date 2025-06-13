import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

const ReactButton = (props) => {
   return <button className={props.className}>{props.children}</button>
   // 리액트 전통 방식으로 만든 컴포넌트를 wrapping하려면 className 지정하면 됨
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};
   font-size: ${(props) => props.size || '10px'};

   &:hover {
      /* 
      &: 현재 컴포넌트 지정
      가상 클래스나 가상 요소와 결합해서 사용 (:hover, ::after 등)
      */

      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')}; // 호버하면 이 색깔로 바뀐다!
   }
`

function ReactButton6() {
   return (
      <div>
         {/* <StyledButton>버튼</StyledButton>
         <br />
         <LargeButton>Large</LargeButton>
         <br />
         <ReactButton>React</ReactButton>
         <br />
         <ReactLargeButton>React Large</ReactLargeButton> */}

         <PrimaryButton size="20px" primary>
            Normal
         </PrimaryButton>
      </div>
   )
}

export default ReactButton6
