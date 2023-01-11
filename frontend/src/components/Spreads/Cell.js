import React from 'react'

function Cell(props) {
  return (
 
    
    <li>
       
          <input className="input-" type="text" value={props.item.str} />
      <button onClick={() => {
        props.item.fn(props.id,props.item.uid)
      }}>{ props.item.uid}</button>
    </li>
  )
}

export default Cell
