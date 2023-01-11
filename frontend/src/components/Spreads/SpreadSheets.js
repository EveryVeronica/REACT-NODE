import { useState, useEffect, useRef, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import Cell from "./Cell";
import InputStr from "./InputStr";
import List from "./List";


function SpreadSheets() {

  const [lists, setLists] = useState('');
  const [rows, setRows] = useState([]);



  



  const inputRef = useRef(null);





  const inputText = () => {
 
    setLists([...lists,{
      //เก็บ ค่า input
      uid: uuidv4(),
      str: inputRef.current.value
    }])
    inputRef.current.value = "";


  };





  const remove = (i,e) => {

    let element = []
    rows.map((row,index) => {
                  
      if (index == i) {
        element.push(

        row.filter((item) => (
          item.uid !== e
        ))
          
        )
        
      } else { 
        element.push(row)
      }
               
    })
    
    setRows(element)
}



  useEffect(() => {
    if (lists.length >= 5) {
      setRows([...rows, lists])
      setLists('')
    }
  }, [lists]);











  return (
    <div className="container-fluid">

      {<InputStr Ref={inputRef} fn={inputText} />}


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

        


        {<List arr={lists} />}






        <div class="row--spread-c">
          <div class="grid-container">
            <div class="item1">1</div>
            <div class="item2">

            

              { 
         
            rows.map((row,index) => {
                  
              let element = []

              row.forEach((item) => {









                element.push(<Cell key={item.uid} item={item} id={index} fn={remove} />)
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
