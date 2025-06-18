import './App.css'
import CounterComponent from './ReduxCounter/CounterComponent'
import { Provider } from 'react-redux'
import store from './ReduxCounter/store'

function App() {
   return (
      <Provider store={store}>
         <CounterComponent />
      </Provider>
   )
}

export default App
