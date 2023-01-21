
import { useState,useEffect } from "react";
import io from "socket.io-client";
import SpreadOnline from "../components/SpreadsOnline/SpreadOnline";
import SpreadSheets from "../components/Spreads/SpreadSheets";


//หน้า logon
function Verification(props) {




  const [socket, setSocket] = useState(""); //ร้องขอเซิฟเวอร์ ทาง sockket
  const [room, setRoom] = useState(""); //เส้นทางการติดต่อระบบ









  useEffect(() => {

    props.user.getIdToken(true).then(function (idToken) {


      
      const issocket = io.connect("http://localhost:3001", {
        auth: {
          token: idToken,
        },
      });
  
      setSocket(issocket);
    
      issocket.emit("config_room", "1");
      issocket.on("receive_config", (data) => {
        setRoom(data);
      
      })

    });


  }, [props.user]);






  return (
    <div>

      
<div>


        {props.status === true ? 

socket ? <SpreadOnline socket={socket} roomId={room} /> : null

: null}



</div>
  

      
      {<SpreadSheets/>}
    </div>
  );
}

export default Verification;
