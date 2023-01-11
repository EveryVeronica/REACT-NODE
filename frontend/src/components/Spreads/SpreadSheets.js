import { useState, useEffect, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import Cell from "./Cell";


function SpreadSheets() {

  const [lists, setLists] = useState('');
  const [rows, setRows] = useState([]);



  



  const inputRef = useRef(null);





  const inputText = () => {
 
    setLists([...lists,{
      //เก็บ ค่า input
      uid: uuidv4(),
      str: inputRef.current.value,
    }])
    inputRef.current.value = "";


  };









  useEffect(() => {
    if (lists.length >= 5) {
      setRows([...rows, lists])
      setLists('')
    }
  }, [lists]);











  return (
    <div className="container-fluid">
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

          <input ref={inputRef} id="input" className="input--" type="text" />

          <button className="btn--a" onClick={inputText}>
            Insert!
          </button>

          <button className="btn--b">Import.Csv!</button>
        </div>
      </div>
      <div
        className="container"
        style={{ whiteSpace: "nowrap", overflowX: "scroll" }}
      >
        <div class="row--spread-a">
          <div class="grid-container">
            <div class="item1"></div>

            <div class="item2" style={{ display: "flex" }}></div>
          </div>
        </div>
        <div class="row--spread-b">
          <div class="grid-container">
            <div class="item1"></div>
            <div class="item2" style={{ display: "flex" }}>
         
            <ul>
      {lists ? lists.map((item) => (
        <Cell key={item.uid} item={item} />
      )) : null}
                
    </ul>







            </div>
          </div>
        </div>
        <div class="row--spread-c">
          <div class="grid-container">
            <div class="item1">1</div>
            <div class="item2">

            

              { 
         
            rows.map((row,index) => {
                  
              let element = []

              row.forEach((item) => {
                  element.push(<Cell key={item.uid} item={item} />)
              })
              return <ul key={uuidv4()}> {element} <button onClick={() => {
                     let newR = rows.filter((r,k) => (
                         k !== index
                    ))
                       setRows(newR)
              }}>ลบ</button> </ul> 
           })
                
              }
           
          

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpreadSheets
