import React, { useMemo, useState } from "react";
import InsertsText from "../Insert/InsertsText";
import ListText from "../List/ListText";

import styles from "./Spreadsheets.module.css";


import { v4 as uuidv4 } from "uuid";
function Spreadsheets({user,Input}) {
  const [Lists, setLists] = useState([]); // lists text
  const [ListsRow, setListsRow] = useState([]); // ListsRow


    if (Lists.length >= 5) {
      setListsRow([...ListsRow, Lists]);
      setLists([]);
    }


  const Renders = useMemo(() => {
    let arr = [];
    for (let index = 0; index < ListsRow.length; index++) {
      let row = ListsRow[index];
      let element = row.map((item) => (
        <li key={item.ListText.id}>
          <button >{item.user}</button>
          <input type="text" value={item.ListText.text} onChange={() => {}} />
        </li>
      ));

      let addEl = (
        <ul key={index}>
          {element}

          <button
            type="text"
            onClick={() => {
              //  console.log(ListsRow[index]); //ตำแหน่ง arr
              let fi = ListsRow.filter((item, i) => i !== index);
              setListsRow(fi);
            }}
          >
            ลบ
          </button>
        </ul>
      );

      arr.push(addEl);
    }

    return arr;
  }, [ListsRow]);


useMemo(() => {



  if (Input != "") {


    const myArray = JSON.parse(Input.message);

    let arr = myArray.map(message => {



     return {
        ListText: {
          id: uuidv4(),
          text:message
        },
        user:Input.Name
      }
      
    });
    
    setListsRow([...ListsRow, arr ]);
    
  }





  }, [Input]);
  return (
    <div>







<div className={styles.container_fluid}>
      <div className={styles.spread_grid}>


          <div className={styles.room_id}>1</div>
          <div  className={styles.new_item}>2</div>
          <div className={styles.status}>3</div>
          <div className={styles.control}>4</div>
          <div  className={styles.sheet}>5</div>
          <div  className={styles.confirm}>6</div>
          <div  className={styles.user_online}>7</div>
         

          

   


        </div>
     
     
</div>




























    
      <p>debug:{Lists.map((item) => item.ListText.text)}</p>
      <InsertsText
        ReceiveInput={(r) => {
          let obj = ""
          if (user) {
            obj = {
              ListText: r,
              user:user.displayName
            }
          } else {
            obj = {
              ListText: r,
              user:"anonymous"
            }

          }

         
          setLists([...Lists, obj]);
        }}
      />
      <ListText Lists={Lists} />

      {Renders}
    </div>
  );
}

export default Spreadsheets;
