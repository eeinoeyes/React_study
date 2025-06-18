import './App.css'
// import Quiz04 from './Quiz04'
// import CreateProject from './CreateProject'
import TodoApp from './Quiz01_copy/TodoApp'
import { Provider } from 'react-redux'
import store from './Quiz01_copy/store'

function App() {
   // return <Quiz04></Quiz04>
   // return <CreateProject></CreateProject>
   return (
      <Provider store={store}>
         <TodoApp />
      </Provider>
   )
}

export default App
