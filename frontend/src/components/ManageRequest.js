import { useState, useEffect } from "react";
import io from "socket.io-client";
import SpreadOnline from "../components/SpreadOnline";

function ManageRequest({ token }) {
  const [socket, setSocket] = useState(""); //ร้องขอเซิฟเวอร์ ทาง sockket
  const [route, setRoute] = useState(""); //เส้นทางการติดต่อระบบ

  return (
    <div>
      <button
        onClick={() => {
          const socket = io.connect("http://localhost:3001", {
            auth: {
              token: token,
            },
          });

          socket.emit("config_room", "1");

          socket.on("receive_config", (data) => {
            console.log(data);
            setRoute(data);
            setSocket(socket);
          });
        }}
      >
        สร้างการเชื่อมต่อ
      </button>
      <button
        onClick={() => {
          setRoute(null);
          setSocket(null);
        }}
      >
        ตัดการเชื่อมต่อ
      </button>

      {socket ? <SpreadOnline socket={socket} route={route} /> : null}
    </div>
  );
}

export default ManageRequest;
