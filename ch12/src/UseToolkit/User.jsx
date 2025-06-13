import { useDispatch, useSelector } from 'react-redux'
import { setName, setAge } from './userSlice'

function User() {
   const dispatch = useDispatch()
   const { name, age } = useSelector((state) => {
      return state.user
      // state에 counter도 같이 들어 있음(store를 같이 쓰니까)
   })

   return (
      <div>
         <input type="text" placeholder="이름" onChange={(e) => dispatch(setName(e.target.value))} />
         <input type="number" placeholder="나이" onChange={(e) => dispatch(setAge(e.target.value))} />
         <p>이름: {name}</p>
         <p>나이: {age}</p>
      </div>
   )
}

export default User
