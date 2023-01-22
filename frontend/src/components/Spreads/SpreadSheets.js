import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Cell from "./Cell";
import Heading from "./Heading";
import InputStr from "./InputStr";
import List from "./List";

import styles from './SpreadSheets.module.css'


function SpreadSheets({text}) {
  const [lists, setLists] = useState("");
  const [rows, setRows] = useState([]);
  const [quota, setQuota] = useState(5);

  const [headings, setHeadings] = useState([]);



  const inputRef = useRef(null);

  const inputText = () => {
    setLists([
      ...lists,
      {
        //เก็บ ค่า input
        uid: uuidv4(),
        str: inputRef.current.value,
      },
    ]);
    inputRef.current.value = "";
  };


  const quotaInput = (event) => {

  setQuota(event.target.value);
  }


  const remove = (i, e) => {
    let element = [];

    rows.map((row, index) => {
      if (index === i) {
        element.push(row.filter((item) => item.uid !== e));
      } else {
        element.push(row);
      }

      return true
    });

    setRows(element);
  };

  useEffect(() => {
    if (lists.length >= quota) {
      setRows([...rows, lists]);
      setLists("");
    }
  }, [lists]);

  useEffect(() => {




    if (!text == "") {
      let str = []
    for (let index = 0; index < text.length; index++) {
      str.push({
        //เก็บ ค่า input
        uid: uuidv4(),
        str: text[index],
      })
    
    
      
    }

    setRows([...rows,str])

    }


  }, [text]);

  useEffect(() => {


    let el = []

    for (let index = 0; index < quota; index++) {

     el.push(<Heading/>)
    }

    setHeadings(<ul>{el}</ul>)

  }, [quota]);

  return (
    <div className={styles.container_fluid}>
      {<InputStr Ref={inputRef} set={quotaInput} fn={inputText} />}

      <div
        className={styles.container}
        style={{ whiteSpace: "nowrap", overflowX: "scroll" }}
      >


        {<List arr={lists} />}

        <div className={styles.spread_b}>

      <div className={styles.item1}></div>
      <div className={styles.item2} style={{ display: "flex" }}>
   



{headings}



      </div>

    </div>



        <div className={styles.spread_c}>

            <div className={styles.item1}>1</div>
            <div className={styles.item2}>
              {rows.map((row, index) => {
                let element = [];

                row.forEach((item) => {
                  element.push(
                    <Cell key={item.uid} item={item} id={index} fn={remove} />
                  );
                });
                return (
                  <ul key={uuidv4()}>
          
                    {element}
                    <button
                      onClick={() => {
                        let newR = rows.filter((r, k) => k !== index);
                        setRows(newR);
                      }}
                    >
                      ลบ
                    </button>
                  </ul>
                );
              })}
            </div>
  
        </div>
      </div>
    </div>
  );
}

export default SpreadSheets;
