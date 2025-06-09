import { useCallback, useState } from 'react'
import './css/TodoInsert.css'
import { CiCirclePlus } from 'react-icons/ci'

function TodoInsert({ onInsert }) {
   const [value, setValue] = useState('')
   const onChange = (e) => setValue(e.target.value)
   // App.jsx의 onInsert 함수를 props로 받아오고
   const onSubmit = useCallback(
      (e) => {
         e.preventDefault()
         /*
      submit은 기본적으로 브라우저를 새로고침하는데, 
      preventDefault 사용시 새로고침을 제어해줌
      */

         onInsert(value) // onSubmit 안에서 실행
         setValue('')
      },
      [value, onInsert]
      /*
      onInsert -> todos state가 변경될 때마다 함수가 리렌더링됨(todo state에 의존)
      onSubmit 내부에서 정의된 값 외에는 전부 deps 배열에 파라미터로 입력해줘야 함
      */
   )

   return (
      <form className="TodoInsert" onSubmit={onSubmit}>
         <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
         <button type="submit">
            {/* onSubmit: submit 버튼을 눌렀을 때 발생하는 이벤트 */}
            <CiCirclePlus />
         </button>
      </form>
   )
}

export default TodoInsert
