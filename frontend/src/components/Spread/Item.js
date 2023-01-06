import { useState,useEffect } from "react";

const Item = (props) => {
    




return (

    <li>
       <button type="button" className="btn-" onClick={props.onhandle}>

      </button> 
          <input className="input-" type="text" value={props.item.str} />

    </li>
)

} 

export default Item;
