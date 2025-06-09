import { useMemo, useState } from 'react'
const getAverage = (numbers) => {
   console.log('평균값 계산 . . . ')
   if (numbers.length === 0) return 0
   const sum = numbers.reduce((a, b) => a + b)
   return sum / numbers.length
}

function UseMemoEx1() {
   const [list, setList] = useState([])
   const [number, setNumber] = useState('')
   const onChange = (e) => setNumber(e.target.value)
   const onInsert = (e) => {
      const nextList = list.concat(parseInt(number)) //parseInt=정수로 바꿔줌(Number같은 역할)
      setList(nextList)
      setNumber('')
   }

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
            <b>평균값:{getAverage(list)}</b>
         </div>
      </div>
   )
}

export default UseMemoEx1
