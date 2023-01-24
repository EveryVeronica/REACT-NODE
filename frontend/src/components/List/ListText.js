import React from 'react'

function ListText({Lists}) {
  return (
    <ul>
          {Lists.map((item) => <li key={item.ListText.id}>
          <input 
         type="text" 
         placeholder="text..."
              defaultValue={item.ListText.text}
              
          
               />
          </li>)}


        

    </ul>
  )
}

export default ListText
