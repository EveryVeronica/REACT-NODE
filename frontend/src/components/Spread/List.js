import Item from "./Item";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  const [Lists, setList] = useState([]);

  useEffect(() => {
    if (props.text.uid !== undefined) {
      setList([...Lists, props.text]);

      if (Lists.length >= props.round) {
        props.text.fn(Lists);
        setList([]);
      }
    }
  }, [props.text]);

  return (
    <ul>
      {Lists.map((item) => (
        <Item key={item.uid} item={item} />
      ))}
    </ul>
  );
};

export default List;
