import { useState,useEffect } from "react";

const Item = (props) => {
    




return (

    <li>
       
        

    {props.onhandle ?  <button type="button" className="btn-" onClick={() => {
            props.onhandle(props.item.uid)
       }}>

        </button>  : null} 
          <input className="input-" type="text" value={props.item.str} />

    </li>
)

} 

export default Item;
