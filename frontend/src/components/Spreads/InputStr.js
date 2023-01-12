import React from 'react'
import styles from './InputStr.module.css'


function InputStr(props) {
  return (
    <div className="container">
    <div className={styles.row}>
 

      <input
        onChange={props.set}
        id="input"
        className={styles.input}
        placeholder="numberRef"
        type="text"
      />

      <input ref={props.Ref} id="input" className={styles.input} type="text" />

      <button className={styles.btn_a} onClick={props.fn}>
        Insert!
      </button>

      <button className={styles.btn_b}>Import.Csv!</button>
    </div>
  </div>
  )
}

export default InputStr
