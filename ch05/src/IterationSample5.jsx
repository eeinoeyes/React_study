import { useState } from 'react'

// 게시판, 쇼핑 목록, 댓글창 등 만들 때 이 구조 많이 쓴다고 함!!

function IterationSample5() {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const nameList = names.map((name) => (
      <li
         key={name.id}
         onDoubleClick={() => {
            onRemove(name.id)
         }}
      >
         {name.text}
      </li>
   ))

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

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)
   }

   return (
      <>
         <input type="text" value={inputText} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>추가</button>
         <ul>{nameList}</ul>
      </>
   )
}

export default IterationSample5
