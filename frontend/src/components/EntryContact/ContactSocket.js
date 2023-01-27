import React, { useEffect, useMemo, useRef, useState } from "react";
import io from "socket.io-client";

let count = 0;

function ContactSocket({ user, token }) {
  const [ContactID, setContactID] = useState(""); //เก็บ user login WithGoogle
  const [message, setMessage] = useState(""); //เก็บ user login WithGoogle
  const [receive, setReceive] = useState(""); //เก็บ user login WithGoogle
  const [room, setRoom] = useState(""); //เก็บ user login WithGoogle

  const inputSetRoomRef = useRef(null);
  const inputTextRef = useRef(null);

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
      setReceive(data);
      
      console.log("displayName:"+data.Name +"ข้อความ"+data.message);
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

  return (
    <div>
      <input ref={inputTextRef} type="text" id="message" name="message" />

      <button
        onClick={() => {
          setMessage(inputTextRef.current.value);
        }}
      >
        ส่งข้อความ
      </button>

      <input ref={inputSetRoomRef} type="text" />

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

      <p>token: {token}</p>
     <p>ContactID: {ContactID}</p>
      


      <p>Message: {message}</p>
      <p>ReceiveName: {receive.Name} - ReceiveMessage: {receive.message}</p>
    </div>
  );
}

export default ContactSocket;
