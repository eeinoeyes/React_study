import { createStore } from 'redux'
import counterReducer from './CounterReducer'
// 컴포넌트 아님! js고 소문자로 시작

const store = createStore(counterReducer)
export default store
