import { useState, useEffect, useRef } from "react";
import CellText from "../components/CellText";
import "./SpreadOnline.css";

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
  );
}

export default SpreadOnline;
