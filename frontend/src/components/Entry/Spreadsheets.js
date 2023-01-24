import React, { useMemo, useState } from "react";
import InsertsText from "../Insert/InsertsText";
import ListText from "../List/ListText";

function Spreadsheets({user}) {
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
          <button >{item.user.displayName}</button>
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

  return (
    <div>
      {user ? <button>{user.displayName}</button> : null}
      <p>debug:{Lists.map((item) => item.ListText.text)}</p>
      <InsertsText
        ReceiveInput={(r) => {
          let obj = ""
          if (user) {
            obj = {
              ListText: r,
              user:user
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
