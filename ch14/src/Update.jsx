import React, { Component } from 'react'

class Update extends Component {
   constructor(props) {
      super(props)
      this.state = { count: 0 } //초기 state
   }
   handleClick = () => {
      this.setState({ count: this.state.count + 1 })
   }
   // 업데이트시 기존 가상DOM과 새로운 가상DOM을 비교 후 변화한 부분만 새로운 가상DOM에 반영
   render() {
      console.log('---------렌더링……🎵')
      return (
         <div>
            <p>{this.state.count}</p>
            <button onClick={this.handleClick}>+1</button>
         </div>
      )
   }
   componentDidMount() {
      console.log('마운트 완료!---------------')
   }
   shouldComponentUpdate(naxtProps, nextState) {
      console.log('🎵 shouldComponentUpdate 호출')
      console.log('현재 state:', this.state.count, ', 다음 state:', nextState.count)
      return true // false면 리렌더링 X
   }
   getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('🎵 getSnapshotBeforeUpdate 호출')
      console.log('이전 state:', prevState.count)
      return '스냅샷 데이터'
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('🎵 componentDidUpdate 호출')
      console.log('이전 state:', prevState.count)
      console.log('스냅샷:', snapshot)
   }
}
export default Update
