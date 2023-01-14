import React from 'react'
import styles from './GroupChat.module.css'

function GroupChat(props) {
  return (
    <div className={styles.grid_container}>
    <div className={styles.item1}>หมายเลขห้อง</div>
          <div className={styles.item2}>

              

              <input className={styles.id} onChange={props.inputJoin} type="text"/>




    </div>
      <div className={styles.item3}>
      
      
      
      {props.messageReceived}
      
      
      
      
      
      <input className={styles.id} onChange={props.inputMessage} type="text"/>
      <button type="text" onClick={props.sendMessage}>ส่ง</button>
      
      </div>  
  
  </div>
  
  )
}

export default GroupChat
