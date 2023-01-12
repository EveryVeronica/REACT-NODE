import React from 'react'
import styles from './Cell.module.css'

function Cell(props) {
  return (
 
    
    <li>
         {/* {props.fn ?  <button className={styles.btn_remove} onClick={() => {
        props.fn(props.id,props.item.uid)
      }}></button> : null} */}

      
      <input className={styles.input} type="text" value={props.item.str} />
      


   
      


    </li>
  )
}

export default Cell
