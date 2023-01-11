import React from 'react'

function InputStr(props) {
  return (
    <div className="container">
    <div class="row-frame">
 

      <input
        onChange={(event) => {
          //setQuota(event.target.value);
        }}
        id="input"
        className="input--"
        placeholder="numberRef"
        type="text"
      />

      <input ref={props.Ref} id="input" className="input--" type="text" />

      <button className="btn--a" onClick={props.fn}>
        Insert!
      </button>

      <button className="btn--b">Import.Csv!</button>
    </div>
  </div>
  )
}

export default InputStr
