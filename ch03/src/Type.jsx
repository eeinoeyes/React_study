const Type = (props) => {
   const { str, num, bool, arr, json, func } = props
   return (
      <div>
         <p>StringProps : {str}</p>
         <p>NumberProps : {num}</p>
         <p>BooleanProps : {bool.toString()}</p>
         <p>ArrayProps : {arr.toString()}</p>
         <p>JsonProps : {JSON.stringify(json)}</p>
         <p>FunctionProps : {func(1, 2)}</p>
      </div>
   )
}
export default Type
