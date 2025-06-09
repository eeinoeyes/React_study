import React, { useState, useTransition } from 'react'

function EventPractice() {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   const onClick = () => {
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)

      //onClick이 실행될 때마다 state값을 초기화
      setUsername('')
      setMessage('')
   }
   const onKeyDown = (e) => {
      // Enter 키를 눌렀을 때 onClick() 실행
      if (e.key === 'Enter') {
         onClick()
      }
   }

   //input에 입력한 값을 각각의 state에 적용
   const onChangeUsername = (e) => setUsername(e.target.value)
   const onChangeMessage = (e) => setMessage(e.target.value)
   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />
         <br />
         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         <button onClick={onClick} disabled={!username || !message}>
            {/* 한쪽이라도 false일 경우(값이 입력되지 않았을 경우) disabled=true가 됨 */}
            확인
         </button>
      </div>
   )
}

export default EventPractice
