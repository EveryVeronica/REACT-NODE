import io from "socket.io-client";


import { useState, useEffect } from "react";

import "./App.css";
import Verification from "./components/Verification";


import LayoutHeader from "./components/LayoutHeader";

import Firebase from "./services/Firebase";


const socket = io.connect("http://localhost:3001");






function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);



    });
  }, []);

  console.log(user);















  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);





  
  return (
    <div className="App">

      {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />}
     <Verification user={user} />








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
  );
}








//   return (
//     <div className="App">
     
//       {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />}
//       <Verification user={user} />
      

    
//     </div>
//   );
// }

export default App;
