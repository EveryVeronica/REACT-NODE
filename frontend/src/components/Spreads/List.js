import React from 'react'
import Cell from './Cell'
import styles from './List.module.css'


function List(props) {
  return (

    



    <div className={styles.spread_a}>

      <div className={styles.item1}></div>

      <div className={styles.item2} style={{ display: "flex" }}>
            
      <ul>
{props.arr ? props.arr.map((item) => (
  <Cell key={item.uid} item={item} />
)) : null}
          
</ul>


      </div>

  </div>
  )
}

export default List
