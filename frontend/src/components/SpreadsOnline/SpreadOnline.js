import { useState, useEffect, useRef } from "react";
import GroupChat from "./GroupChat";
import Manage from "./Manage";
import Property from "./Property";


import styles from './SpreadOnline.module.css'
function SpreadOnline({ socket, route }) {
  // //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const btnSetRoom = (
    <button
      onClick={() => {
        if (route) {
          socket.emit("join_room", route);
          setRoom(route);
        }
      }}
    >
      สร้าง SpreadOnline
    </button>
  );

  const joinRoom = () => {
    socket.emit("join_room", room);
  };
  //ส่งข้อความ
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (data) => {
        setMessageReceived(data);
      });
    }
  }, [socket]);

  //////////////////////////////////////////////////////////////////



  return (

    <div className={styles.container_fluid}>

<div className={styles.spread_config}>
 
{<Manage/>}

        
{<GroupChat/>}








        <div className={styles.container}>
 {<Property/>}
    </div>




    </div>




    <div>

      {room}

      {btnSetRoom}

      <div>
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />

        <button onClick={joinRoom}> Join Room</button>
        <input
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={sendMessage}> Send Message</button>
        <h1> Message:</h1>
        {messageReceived}
      </div>
      </div>
      
      </div>
  );
}

export default SpreadOnline;
