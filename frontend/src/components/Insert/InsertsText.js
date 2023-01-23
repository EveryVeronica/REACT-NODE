import React, { useRef} from 'react'
import { v4 as uuidv4 } from "uuid";
//initialize
function InsertsText({ReceiveInput}) {

    const ref = useRef(); 

  return (
      <div>


          <input type="text" ref={ref} />
          <button type="text" onClick={() => {
       

             ReceiveInput({
                id: uuidv4(),
                text:ref.current.value
             })
        
             ref.current.value = ""
          }}>insert</button>
    </div>
  )
}

export default InsertsText
