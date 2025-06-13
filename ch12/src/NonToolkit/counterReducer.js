// 컴포넌트 아님! js고 소문자로 시작
const initialState = { value: 0 }
// initialState = 맨 처음 state가 undefined일 때 이 값을 초기값으로 사용

function counterReducer(state = initialState, action) {
   if (action.type === 'UP') {
      return { ...state, value: state.value + action.step }
   }
   return state
}

export default counterReducer
