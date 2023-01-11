import React from 'react'
import Cell from './Cell'

function List(props) {
  return (
    <div class="row--spread-b">
    <div class="grid-container">
      <div class="item1"></div>
      <div class="item2" style={{ display: "flex" }}>
   
      <ul>
{props.arr ? props.arr.map((item) => (
  <Cell key={item.uid} item={item} />
)) : null}
          
</ul>







      </div>
    </div>
  </div>
  )
}

export default List
