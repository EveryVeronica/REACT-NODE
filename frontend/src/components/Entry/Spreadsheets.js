import React, { useMemo, useRef, useState } from "react";

import ListText from "../List/ListText";

import styles from "./Spreadsheets.module.css";

import { v4 as uuidv4 } from "uuid";
function Spreadsheets({ user, Input }) {
  const [Lists, setLists] = useState([]); // lists text
  const [ListsRow, setListsRow] = useState([]); // ListsRow
  const ref = useRef();
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
          <button>{item.user}</button>
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

      let arr = myArray.map((message) => {
        return {
          ListText: {
            id: uuidv4(),
            text: message,
          },
          user: Input.Name,
        };
      });

      setListsRow([...ListsRow, arr]);
    }
  }, [Input]);

  return (
    <div className={styles.container_fluid}>
      <div className={styles.spread_grid}>
        <div className={styles.setting}>1</div>
        <div className={styles.insert}>
          <input type="text" ref={ref} />
        </div>
        <div className={styles.control}>
          <button
            type="text"
            onClick={() => {
              let obj = "";
              if (user) {
                obj = {
                  ListText: {
                    id: uuidv4(),
                    text: ref.current.value,
                  },
                  user: user.displayName,
                };
              } else {
                obj = {
                  ListText: {
                    id: uuidv4(),
                    text: ref.current.value,
                  },
                  user: "anonymous",
                };
              }

              setLists([...Lists, obj]);

              ref.current.value = "";
            }}
          >
            insert
          </button>
        </div>
        <div className={styles.lists}>
          {" "}
          <ListText Lists={Lists} />
        </div>
        <div className={styles.heading}>5</div>
        <div className={styles.listsRow}>{Renders}</div>
        <div className={styles.details}>7</div>
      </div>

      <p>debug:{Lists.map((item) => item.ListText.text)}</p>
    </div>
  );
}

export default Spreadsheets;
