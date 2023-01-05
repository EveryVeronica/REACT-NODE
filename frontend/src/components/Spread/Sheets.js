import { useState, useEffect, useRef,useCallback  } from "react";
import List from "./List";
import { v4 as uuidv4 } from 'uuid';
import Item from "./Item";
const initialArtists = [
  {uid:1,text: 'Marta Colvin Andrade' },
  {uid:2,text: 'Lamidi Olonade Fakeye'},
  {uid:3,text: 'Louise Nevelson' },
  {uid:4,text: 'Marta Colvin Andrade' },
  {uid:5,text: 'Lamidi Olonade Fakeye'},
  {uid:6,text: 'Louise Nevelson'},
];

const Sheets = () => {

  const [lists, setList] = useState([]);
  const [rows, setRow] = useState([]);


  const [quota, setQuota] = useState([])


  

  const inputRef = useRef(null);

  const inputText = () => {
    let text = inputRef.current.value

    let num = rows.length
    setList([...lists,{
      uid: uuidv4(),
      number:num,
      text:text
    }])


    if (lists.length >= 5) {

      let listEl = <List list={lists} number={num} />

     setRow([...rows,listEl])

    setList([])
    } else {
 
 
      
    }

    inputRef.current.value = ""
  }




  useEffect(() => {

  }, [lists]);

  
  return (
    <div className="container-fluid">
      <div className="container">
        <div class="row-frame">
          <input
            onChange={(event) => {
      
                
                         }}
            id="input"
            className="input--"
            placeholder="numberRef"
            type="text"
          />

          <input ref={inputRef}  id="input" className="input--" type="text" />

          <button className="btn--a" onClick={inputText} >
            Insert!
          </button>

          <button className="btn--b" >Import.Csv!</button>
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

            <List list={lists} number={lists.length}/>

              
             
            </div>
          </div>
        </div>
        <div class="row--spread-c">
          <div class="grid-container">
            <div class="item1">1</div>
            <div class="item2">



              
            {rows.map((item) => (
         
     item
         
       ))}
 


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
