import { useState, useEffect, use } from 'react'

function UseEffectEx() {
   const [name, setName] = useState('')
   const [nickname, setNickname] = useState('')

   // 매개변수로 함수 들어감(콜백)
   // ★★★ useEffect는 실행되는 시점이 언제인지 아는 게 엄 ~ 청 중요함 !!

   /*
   1. 컴포넌트가 렌더링 될 때마다 실행하는 코드
   useEffect(() => {
       console.log('렌더링이 완료되었습니다')
       console.log({ name, nickname }) <-얘는 json객체로 만드는 거
       위에 들어간 데이터: {name:name, nickname:nickname} 이런 구조임
    })
       */

   /*
   2. 맨 처음 렌더링이 될 때만 실행하고, 업데이트 될 때는 실행하지 않는 코드
   useEffect(() => {
      console.log('렌더링 완료')
      console.log({ name, nickname })
   }, [])
   */

   /*
     3. 특정값이 변경될 때에만 실행하는 코드
     useEffect(() => {
        console.log('렌더링 완료')
        console.log({ name, nickname })
     }, [name])
      */

   /*
    4. 뒷정리 함수
    */
   useEffect(() => {
      console.log('렌더링 완료')
      console.log(name)

      return () => {
         console.log('컴포넌트가 리렌더링 되기 전')
         console.log(name)
      }
   })

   const onChangeName = (e) => setName(e.target.value)
   const onChangeNickname = (e) => setNickname(e.target.value)

   return (
      <div>
         <div>
            <input type="text" value={name} onChange={onChangeName} />
            <input type="text" value={nickname} onChange={onChangeNickname} />
         </div>
         <div>
            <div>
               <b>이름: {name}</b>
            </div>
            <div>
               <b>닉네임: {nickname}</b>
            </div>
         </div>
      </div>
   )
}

export default UseEffectEx
