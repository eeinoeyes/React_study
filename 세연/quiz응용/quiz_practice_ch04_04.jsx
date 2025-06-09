import React, { useState } from 'react'
import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'

function Quiz04() {
   // 1, 2, 3 단계만 관리하면 됨!
   const [level, setLevel] = useState(1)
   // 이미지와 버튼 텍스트를 배열로 저장
   const steps = [{ img: step1, button: '이상해씨 진화!' }, { img: step2, button: '이상해풀 진화!' }, { img: step3 }]

   return (
      <div>
         <img src={steps[level - 1].img} width="150" />
         <br />
         {level < steps.length ? <button onClick={() => setLevel(level + 1)}>{steps[level - 1].button}</button> : <p>진화 끝!</p>}
      </div>
   )
}

export default Quiz04
