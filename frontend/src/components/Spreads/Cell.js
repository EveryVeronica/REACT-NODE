import React from 'react'

function Cell(props) {
  return (
 
    
    <li>
       
          <input className="input-" type="text" value={props.item.str} />

    </li>
  )
}

export default Cell
