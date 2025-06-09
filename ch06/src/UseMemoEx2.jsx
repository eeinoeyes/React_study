import { useMemo, useState } from 'react'
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

function UseMemoEx2() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')
   const onChange = (e) => setNumber(e.target.value)
   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number))
      setList(nextList)
      setNumber('')
   }
   const avg = useMemo(() => getAverage(list), [list]) // getAverage 함수가 실행될 때(=onInsert로 새로운 값을 추가했을 때)만 리렌더링

   return (
      <div>
         <input type="text" onChange={onChange} value={number} />
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

export default UseMemoEx2
