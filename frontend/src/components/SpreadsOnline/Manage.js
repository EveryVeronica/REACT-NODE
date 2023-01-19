import React from 'react'
import styles from './Manage.module.css'


function Manage(props) {
  return (
    <div>
      <input type="text" onChange={props.inputQuota} placeholder='จำนวนฟิว' />
    
      
     
    </div>
  )
}

export default Manage
