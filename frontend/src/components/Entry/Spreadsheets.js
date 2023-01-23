import React, { useEffect, useState } from 'react'
import InsertsText from '../Insert/InsertsText';
import ListText from '../List/ListText';

function Spreadsheets() {

  const [Lists, setLists] = useState([]);// lists text

  const [ListsRow, setListsRow] = useState([]);// lists text

  if (Lists.length >= 5) {
   const el = Lists.map((item => <input
      type="text"
      value={item.text}
      onChange={()=>{}}
   />))
   setListsRow([...ListsRow,el])
   setLists([])
  }


  return (
    <div>
         <p>debug:{Lists.map((item)=> item.text)}</p>
      <InsertsText ReceiveInput={(r) => {
        setLists([...Lists, r])
      }} />
      <ListText Lists={Lists} />
      

   {ListsRow}
   
    </div>
  )
}

export default Spreadsheets
