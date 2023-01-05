import { useState, useEffect, useRef } from "react";
import CellText from "../components/CellText";
import "./SpreadOnline.css";

function SpreadOnline({ socket, route }) {
  // // //Room State
  // const [room, setRoom] = useState("");

  // // Messages States
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // const btnSetRoom = (
  //   <button
  //     onClick={() => {
  //       if (route) {
  //         socket.emit("join_room", route);
  //         setRoom(route);
  //       }
  //     }}
  //   >
  //     สร้าง SpreadOnline
  //   </button>
  // );

  // const joinRoom = () => {
  //   socket.emit("join_room", room);
  // };
  // //ส่งข้อความ
  // const sendMessage = () => {
  //   socket.emit("send_message", { message, room });
  // };

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("receive_message", (data) => {
  //       setMessageReceived(data);
  //     });
  //   }
  // }, [socket]);

  //////////////////////////////////////////////////////////////////


  const [items, setItems] = useState([]); //เก็บค่า input
  const [listitems, setListitems] = useState([]); //เก็บค่า list cell


  const [heading, setHeading] = useState([]); //เก็บค่า heading

  const [quantity, setQuantity] = useState(10); //เก็บค่า จำนวน เริ่มต้น heading


  const inputRef = useRef(null);
  const numberRef = useRef(null);


  useEffect(() => {
    if (items.length >= quantity) {


      let cell = <li>{items.map((e) => e)}</li>;
      setListitems((arr) => [...arr, cell]);

      setItems([]);
    }
  }, [items]);



  useEffect(() => {
    
    let element = []
    for (let i = 0; i < quantity; i++) {


     element.push(<CellText text={i} />) 
      
    }
    setHeading(element);
  },[quantity])

  return (
    <div className="container-fluid">
      <div className="container">
        <div class="row-frame">
          <input ref={numberRef}
        onChange={(event) => {
          setQuantity(event.target.value);
          
                   }}
            id="input" className="input--" placeholder="numberRef" type="text" />

          <input ref={inputRef} id="input" className="input--" type="text" />

          <button
            className="btn--a"
            onClick={() => {
              let text = inputRef.current.value;
              inputRef.current.value = "";

              setItems((arr) => [...arr, <CellText text={text} />]);
            }}
          >
            Insert!
          </button>

          <button className="btn--b">Import.Csv!</button>
        </div>
      </div>
      <div className="container" style={{whiteSpace: "nowrap",overflowX : "scroll"}}>
        <div class="row--spread-a">
          <div class="grid-container">
            <div class="item1">{ items.length}</div>

            <div class="item2" style={{ display: "flex" }}>
              {items.map((e) => e)}
            </div>
          </div>
        </div>
        <div class="row--spread-b">
          <div class="grid-container">
            <div class="item1">{ heading.length}</div>
            <div class="item2" style={{ display: "flex" }}>
              
         
             {heading.map((e) => e)} 

            </div>
          </div>
        </div>
        <div class="row--spread-c">
          <div class="grid-container">
            <div class="item1">1</div>
            <div class="item2">{listitems.map((ee) => ee)}</div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>

  //     {room}

  //     {btnSetRoom}

  //     <div>
  //       <input
  //         placeholder="Room Number..."
  //         onChange={(event) => {
  //           setRoom(event.target.value);
  //         }}
  //       />

  //       <button onClick={joinRoom}> Join Room</button>
  //       <input
  //         placeholder="Message..."
  //         onChange={(event) => {
  //           setMessage(event.target.value);
  //         }}
  //       />
  //       <button onClick={sendMessage}> Send Message</button>
  //       <h1> Message:</h1>
  //       {messageReceived}
  //     </div>
  //   </div>
  // );
}

export default SpreadOnline;
