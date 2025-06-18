// class형 컴포넌트로 생성 (컴포넌트 생명주기 확인용)
import React, { Component } from 'react'

// 마운트: 컴포넌트가 최초로 생성될 때 렌더링
class Mount extends Component {
   /* 컴포넌트 생성시 가장 먼저 실행되는 함수
     이 과정에서 초기 state가 지정됨*/
   constructor(props) {
      super(props)
      this.state = { count: 0 } // 초기state
   }
   // 가상 DOM 구성
   render() {
      console.log('렌더링 중🎵')

      return <div>{this.state.count}</div>
   }

   /* 실제 브라우저 DOM(real DOM) 구성
     useRef 등이 지정되어 있다면 이 시점에 해당 DOM 연결 => 실제 브라우저에 보이는 시점! */

   /* 컴포넌트가 모두 렌더링되고 나면 실행
     => 실제 DOM 접근 가능
     => API 호출 가능 */
   componentDidMount() {
      console.log('마운트 완료')
   }
}

export default Mount
