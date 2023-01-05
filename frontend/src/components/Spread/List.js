import Item from "./Item";
import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from 'uuid';




const List = ({list,number}) => {
  





  return(
    <ul>
    {list.map((item) => (
         
      
      <Item  item={item}/>
      
    ))}
      
      {number ? (
        <button>{number}</button>
      ) : (
        <button>{0}</button>
      )}
  
    

    </ul>
);
} 

  
export default List;
