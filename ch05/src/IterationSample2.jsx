function IterationSample2() {
   const names = ['눈사람', '얼음', '눈', '바람']
   const nameList = names.map((name, index) => <li key={index}>{name}</li>)
   console.log(nameList)
   return <ul>{nameList}</ul>
}

export default IterationSample2
