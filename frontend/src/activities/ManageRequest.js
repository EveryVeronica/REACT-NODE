import { useState, useEffect } from "react";
import io from "socket.io-client";
import SpreadOnline from "../components/SpreadsOnline/SpreadOnline";

function ManageRequest({ token }) {
  const [socket, setSocket] = useState(""); //ร้องขอเซิฟเวอร์ ทาง sockket
  const [route, setRoute] = useState(""); //เส้นทางการติดต่อระบบ

  useEffect(() => {
    const issocket = io.connect("http://localhost:3001", {
      auth: {
        token: token,
      },
    });

    setSocket(issocket);

    issocket.emit("config_room", "1");
    issocket.on("receive_config", (data) => {
      setRoute(data);
    });
  }, [token]);

  return (
    <div>
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
