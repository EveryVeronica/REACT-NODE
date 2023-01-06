import { useState, useEffect, useRef, useCallback } from "react";
import List from "./List";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
const initialArtists = [
  { uid: 1, text: "Marta Colvin Andrade" },
  { uid: 2, text: "Lamidi Olonade Fakeye" },
  { uid: 3, text: "Louise Nevelson" },
  { uid: 4, text: "Marta Colvin Andrade" },
  { uid: 5, text: "Lamidi Olonade Fakeye" },
  { uid: 6, text: "Louise Nevelson" },
];

const Sheets = () => {
  const [input, setInput] = useState({
    uid: undefined,
    text: "start",
  });
  const [render, setRender] = useState([]);
  const [specs, setSpecs] = useState([]);

  const [quota, setQuota] = useState(5); //จำนวน felds

  const inputRef = useRef(null);

  const inputText = () => {
    let text = inputRef.current.value;
    let obj = {
      uid: uuidv4(),
      str: text,
      fn: setRow,
    };
    setInput(obj);

    inputRef.current.value = "";
  };

  const handleClear = () => {};
  const setRow = (e) => {
    alert("ทดสอบ......." + e);
    setSpecs([...specs, e]);
  };

  useEffect(() => {
    let rows = [];
    for (let i = 0; i < specs.length; i++) {

      rows.push(<ul key={i}>
      
        {specs[i].map((item) => (
          <Item key={item.uid} item={item} />
        ))}

        <button onClick={() => {
          
          setSpecs(specs.filter((item,key) => key !== i));


        }}>ลบ{i}</button>
      </ul>);
    }

    setRender(rows);
  }, [specs]);

  return (
    <div className="container-fluid">
      <div className="container">
        <div class="row-frame">
          {quota}

          <input
            onChange={(event) => {
              setQuota(event.target.value);
            }}
            id="input"
            className="input--"
            placeholder="numberRef"
            type="text"
          />

          <input ref={inputRef} id="input" className="input--" type="text" />

          <button className="btn--a" onClick={inputText}>
            Insert!
          </button>

          <button className="btn--b">Import.Csv!</button>
        </div>
      </div>
      <div
        className="container"
        style={{ whiteSpace: "nowrap", overflowX: "scroll" }}
      >
        <div class="row--spread-a">
          <div class="grid-container">
            <div class="item1"></div>

            <div class="item2" style={{ display: "flex" }}></div>
          </div>
        </div>
        <div class="row--spread-b">
          <div class="grid-container">
            <div class="item1"></div>
            <div class="item2" style={{ display: "flex" }}>
              {<List text={input} round={quota} />}
            </div>
          </div>
        </div>
        <div class="row--spread-c">
          <div class="grid-container">
            <div class="item1">1</div>
            <div class="item2">{render}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sheets;
