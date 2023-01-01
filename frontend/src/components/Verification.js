import React, { useState } from "react";
import Chatbox from "./Chatbox";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

//หน้า logon
function Verification({token}) {

  const [room, setRoom] = useState(null);
console.log('dddddddddddddddddddddddddddddd'+token);


  const chatbox = <Chatbox room={room} />

  return (
    <div>
      <button onClick={() => {
  
  socket.emit("decode",token);
  setRoom(1)

      }}>สร้าง chat</button>

    <h1>{room}</h1>

    </div>
);


}

export default Verification;
