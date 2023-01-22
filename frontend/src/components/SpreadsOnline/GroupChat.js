import { useState, useRef } from "react";

import styles from "./GroupChat.module.css";

import Draggable from "react-draggable";

function GroupChat(props) {
  const HeaderInput = useRef(null);
  const refs = useRef([]);

  const [list, setList] = useState([]);
  const [position, setPosition] = useState({
    id: null,
    x: 0,
    y: 0,
  });

  const trackPos = (obj) => {
    setPosition(obj);
  };

  function addToList() {
    let text = HeaderInput.current.value;
    setList([...list, text]);
  }

  function renderList(listItem) {
    return listItem.map((item, index) => (
      <Draggable
        handle="#handle"
        onDrag={(e, data) =>
          trackPos({
            id: index,
            x: data.x,
            y: data.y,
          })
        }
      >
        <li className={styles.li}>
          <div>{item}</div>

          {position.id === index ? (
            <input
              id="handle"
              type="text"
              value={`X:${position.x.toFixed(0)}Y:${position.y.toFixed(0)}`}
            />
          ) : (
            <input id="handle" type="text" />
          )}

          <input type="text" ref={(el) => (refs.current[index] = el)} />
        </li>
      </Draggable>
    ));
  }
  function btnSen() {
    props.inputMessage(refs.current);
  }

  return (
    <div className={styles.grid_container}>
      <div className={styles.item1}>
        <input className={styles.id} onChange={props.inputJoin} type="text" />
      </div>
      <div className={styles.item2}>
        <input className={styles.input} ref={HeaderInput} type="text" />

        <button type="text" onClick={addToList}>
          สร้าง
        </button>
      </div>
      <div className={styles.item3}>
        {props.messageReceived}

        {renderList(list)}

        <button type="text" onClick={btnSen}>
          ส่ง
        </button>
      </div>
    </div>
  );
}

export default GroupChat;
