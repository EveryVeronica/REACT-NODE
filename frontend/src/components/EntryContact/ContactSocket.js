import React, { useEffect, useMemo, useRef, useState } from 'react'
import io from "socket.io-client";
function ContactSocket({token}) {

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
      return setSocket
    }, [token]);
  
  
    useMemo(() => {
      socket.emit("config_room", "1");
      socket.on("receive_config", (data) => {
          setContactID(data)
      });

      socket.on("receive_message", (data) => {
        setReceive(data);
      });





    }, [socket]);
  

  
  


  useMemo(() => {

    if (room != "") {
      console.log("setroom"+room);
      socket.emit("join_room", room);
  
    }

    }, [room]);
  
  
    useEffect(() => {
      sendMessage()
    }, [message]);
  



  


  



    //ส่งข้อความ
  const sendMessage = () => {
    if (room) {
      console.log("sendMessage"+room);
      socket.emit("send_message", { message, room });
    }
  };
  









  return (
      <div>

           <input
        ref={inputTextRef}
        type="text"
        id="message"
        name="message"
      />

      
<button onClick={() => {


        setMessage(inputTextRef.current.value)
        
}}>senmsg</button>

     <input
        ref={inputSetRoomRef}
        type="text"
      />


      <button onClick={() => {

        if (inputSetRoomRef.current.value != "") {
          setRoom(inputSetRoomRef.current.value)
        } else {
          if (ContactID) {
            socket.emit("join_room", ContactID);
            inputSetRoomRef.current.placeholder = ContactID
            setRoom(ContactID)
          }

        }
        
      }}>ตั่งค่าห้อง</button>


          {/* <p>Debug: {token}</p>
           {ContactID} */}
      
      <p>Message: {message}</p>
      <p>Receive: {receive}</p>

    </div>
  )
}

export default ContactSocket
