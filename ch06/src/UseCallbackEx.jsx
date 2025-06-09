import { useCallback, useState } from 'react'
const getAverage = (numbers) => {
   console.log('평균값 계산 . . . ')
   if (numbers.length === 0) return 0
   if (!parseInt(numbers)) {
      alert('숫자만 입력하세요')
      return
   }
   const sum = numbers.reduce((a, b) => a + b)
   return sum / numbers.length
}

function UseCallbackEx() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')

   // useCallback: 컴포넌트가 리렌더링 될 때 함수가 재생성되지 않도록 통제
   // 리렌더링 될 때마다 함수를 재생성하면 성능 저하의 우려가 있음
   // 컴포넌트가 처음 렌더릴 될 때만 함수 생성
   const onChange = useCallback((e) => setNumber(e.target.value), [])

   const onInsert = useCallback(
      (e) => {
         const nextList = list.concat(parseInt(number))
         setList(nextList)
         setNumber('')
      },
      [number, list]
   ) // 함수 내부에서 어떤 값을 참조(사용)할 때에는 두 번째 파라미터에 그 값을 넣어줘야 함
   // 위 함수는 number, list의 state값이 바뀌므로 반드시 함수를 재생성해야 하는 구조

   const avg = useCallback(() => getAverage(list), [list]) // getAverage 함수가 실행될 때(=onInsert로 새로운 값을 추가했을 때)만 리렌더링

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onInsert()
      }
   }

   return (
      <div>
         <input type="text" onChange={onChange} value={number} onKeyDown={onKeyDown} />
         <button onClick={onInsert}>등록</button>
         <ul>
            {list.map((value, index) => (
               <li key={index}>{value}</li>
            ))}
         </ul>
         <div>
            <b>평균값:{avg}</b>
         </div>
      </div>
   )
}

export default UseCallbackEx
