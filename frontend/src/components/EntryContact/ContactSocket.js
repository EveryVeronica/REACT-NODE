import React, { useMemo, useState } from 'react'
import io from "socket.io-client";
function ContactSocket({token}) {

    const [ContactID, setContactID] = useState(""); //เก็บ user login WithGoogle
  //  const [message, setMessage] = useState(""); //เก็บ user login WithGoogle


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
    }, [socket]);
    


  return (
      <div>
         

          <p>Debug: {token}</p>
  {ContactID}
    </div>
  )
}

export default ContactSocket
