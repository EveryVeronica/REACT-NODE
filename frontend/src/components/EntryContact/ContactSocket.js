import React, { useEffect, useMemo, useRef, useState } from "react";
import io from "socket.io-client";
import Draggable from "react-draggable";
import styles from "./ContactSocket.module.css";

let count = 0;

function ContactSocket({ user, token, sendValue }) {
  const [ContactID, setContactID] = useState(""); //เก็บ user login WithGoogle
  const [message, setMessage] = useState(""); //เก็บ user login WithGoogle
  const [receive, setReceive] = useState(""); //เก็บ user login WithGoogle
  const [room, setRoom] = useState(""); //เก็บ user login WithGoogle

  const [position, setPosition] = useState({
    id: null,
    x: 0,
    y: 0,
  });

  const inputSetRoomRef = useRef(null);
  const inputTextRef = useRef(null);

  const HeaderInput = useRef(null);
  const [list, setList] = useState([]);
  const refs = useRef([]);

  const socket = useMemo(() => {
    const setSocket = io.connect("http://localhost:3001", {
      auth: {
        token: token,
      },
    });
    count++;
    setSocket.emit("config_room", count);
    return setSocket;
  }, [token]);

  useMemo(() => {
    socket.on("receive_config", (data) => {
      setContactID(data);
    });

    socket.on("receive_message", (data) => {
      sendValue(data);
      setReceive(data);

      console.log("displayName:" + data.Name + "ข้อความ" + data.message);
    });
  }, [socket]);

  useEffect(() => {
    sendMessage();
  }, [message]);

  //ส่งข้อความ
  const sendMessage = () => {
    if (room) {
      if (user) {
        let displayName = user.displayName;

        socket.emit("send_message", { displayName, message, room });
      }
    }
  };

  function addToList() {
    let text = HeaderInput.current.value;
    setList([...list, text]);
  }

  const renderList = useMemo(() => {
    return list.map((item, index) => (
      <Draggable
        handle="#handle"
        onDrag={(e, data) => console.log(`[X:${data.x}]-[Y:${data.y}]`)}
      >
        <li>
          <div>{item}</div>
          <input type="text" ref={(el) => (refs.current[index] = el)} />
        </li>
      </Draggable>
    ));
  }, [list]);

  return (
 
      <div className={styles.container_fluid}>
        <div className={styles.spread_grid}>
          <div className={styles.room_id}>1</div>
          <div className={styles.new_item}>
            <input
              ref={HeaderInput}
              type="text"
              placeholder="HeaderInput...."
            />{" "}
            <button type="text" onClick={addToList}>
              สร้าง
            </button>
          </div>
          <div className={styles.status}>3</div>
          <div className={styles.control}>
            {" "}
            <input ref={inputSetRoomRef} type="text" />{" "}
            <button
              onClick={() => {
                if (inputSetRoomRef.current.value != "") {
                  let r = inputSetRoomRef.current.value;
                  socket.emit("join_room", r);
                  setRoom(r);
                } else {
                  if (ContactID) {
                    socket.emit("join_room", ContactID);
                    inputSetRoomRef.current.placeholder = ContactID;
                    setRoom(ContactID);
                  }
                }
              }}
            >
              ตั่งค่าห้อง
            </button>
          </div>
          {/*           
            <input ref={inputTextRef} type="text" id="message" name="message" /> */}
          <div className={styles.sheet}> {renderList} </div>
          <div className={styles.confirm}>
            <button
              onClick={() => {
                let arr = refs.current.map((item) => item.value);
                setMessage(arr);
              }}
            >
              ส่งข้อความ
            </button>
          </div>
          <div className={styles.user_online}>7</div>
      </div>
      




            {/* <p>token: {token}</p>
     <p>ContactID: {ContactID}</p>
      


      <p>Message: {message}</p>
      <p>ReceiveName: {receive.Name} - ReceiveMessage: {receive.message}</p> */}
      </div>



  );
}

export default ContactSocket;
