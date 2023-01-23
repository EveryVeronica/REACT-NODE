import React from 'react'

function ListText({Lists}) {
  return (
    <ul>
          {Lists.map((item) => <li key={item.id}>
          <input 
         type="text" 
         placeholder="text..."
         defaultValue={item.text}
               />
          </li>)}


        

    </ul>
  )
}

export default ListText
