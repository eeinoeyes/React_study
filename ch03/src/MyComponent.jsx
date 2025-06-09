// 리액트에서는 컴포넌트 함수명과 파일명을 똑같이 써야 하고, 항상 대문자로 시작함

//const MyConponent = (props) => {
//props 한번 받고 비구조화할당하는 방법보다 그냥 한번에 때려넣는 방식이 더 보편적
const MyComponent = ({ name = '세연', job, forNumber, children }) => {
   // name: 비구조화할당에서의 디폴트값 설정
   // const { name, job, forNumber, children } = props // 비구조화할당
   return (
      <div>
         <p>안녕하세요. 제 이름은 {name}입니다.</p>
         <p>제 직업은 {job} 입니다.</p>
         <p>좋아하는 숫자는 {forNumber}입니다.</p>
         <p>children 값은 {children}</p>
      </div>
   )
}

export default MyComponent
