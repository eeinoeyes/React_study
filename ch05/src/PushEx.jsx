import { useState } from 'react'

function PushEx() {
   const [items, setItems] = useState([{ id: 1, name: 'Item 1' }])

   const addItemWithPush = () => {
      const newItem = { id: 2, name: 'Item 2' }
      //   items.push(newItem)
      //   setItems(items)
      const updatedItems = items.concat(newItem)
      setItems(updatedItems)
   }

   return (
      <div>
         <button onClick={addItemWithPush}>목록추가</button>
         <ul>
            {items.map((item) => (
               <li key={item.id}>{item.name}</li>
            ))}
         </ul>
      </div>
   )
}

export default PushEx
