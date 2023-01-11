import React from 'react'

function Cell(props) {
  return (
 
    
    <li>
         {props.fn ?  <button onClick={() => {
        props.fn(props.id,props.item.uid)
      }}>-</button> : null}

      
      <input className="input-" type="text" value={props.item.str} />
      


   
      


    </li>
  )
}

export default Cell
