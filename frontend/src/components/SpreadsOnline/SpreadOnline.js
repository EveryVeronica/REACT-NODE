import { useState, useEffect} from "react";
import GroupChat from "./GroupChat";
import Manage from "./Manage";
import Property from "./Property";


import styles from './SpreadOnline.module.css'
function SpreadOnline({ socket, roomId }) {
  // //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const [quota, setQuota] = useState(5);

  const [lists, setLists] = useState([]);



  const btnSetRoom = () => {
    alert('สร้างการเชื่อมต่อ')
    if (roomId) {
      socket.emit("join_room", roomId);
      setRoom(roomId)
    }

   
  };


  const inputQuota = (event) => {

    setQuota(event.target.value);


  }

  const inputJoin = (event) => {


    joinRoom(event.target.value)
    setRoom(event.target.value);

  }

  const joinRoom = (r) => {
    socket.emit("join_room", r);
  };
  //ส่งข้อความ
  const sendMessage = () => {
  socket.emit("send_message", { message, room });
  };


  const inputMessage = (list) => {
 let array = ''
    for (let index = 0; index < list.length; index++) {

      array +=list[index].value+",";
      list[index].value = ''
    }
    setMessage(array);
 
  }

  useEffect(() => {
    sendMessage()
  }, [message]);




  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (data) => {
    
        setMessageReceived(data);
      });
    }
  }, [socket]);





  useEffect(() => {
    setLists([...lists, messageReceived])
  }, [messageReceived]);




  //////////////////////////////////////////////////////////////////



  return (

    

    <div className={styles.container_fluid}>
  
      <div className={styles.spread_config}>

 
        {<Manage inputQuota={inputQuota} />}

        
        {<GroupChat inputJoin={inputJoin} inputMessage={inputMessage} sendMessage={sendMessage} messageReceived={messageReceived} quota={quota} />}



        <div className={styles.container}>
          {<Property setroom={btnSetRoom} room={room} />}
    </div>




    </div>




    <div>



    {lists}


      </div>



      </div>
  );
}

export default SpreadOnline;
