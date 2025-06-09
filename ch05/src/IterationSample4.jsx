import { useState } from 'react'

function IterationSample4() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const nameList = names.map((name) => <li key={name.id}>{name.text}</li>)

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)
   const onChange = (e) => setInputText(e.target.value)

   const onClick = (e) => {
      const nextNames = names.concat({
         id: nextId,
         text: inputText,
      })
      setNames(nextNames)
      setNextId(nextId + 1)
      setInputText('')
   }
   // 이미 있는 데이터에 li를 하나씩 추가하는 개념이 아니라 li에 새로운 값이 추가될 때마다 처음부터 다시 쫙 만든뒤에 ul이랑 같이 한번에 합치는 느낌인듯?
   /* 
   GPT가 수정해준 주석:
   이미 있는 li 요소에 직접 추가하는 게 아니라,
   새로운 값이 추가될 때마다 names 배열 전체를 map으로 다시 돌려서
    li 리스트를 처음부터 새로 만들어서 한 번에 ul 안에 렌더링함
   (리액트의 불변성: 원본을 직접 수정하지 않고, 새 배열을 만들어서 setNames로 교체)
   */
   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample4
