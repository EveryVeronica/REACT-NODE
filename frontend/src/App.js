import React, { useCallback, useEffect,useState } from 'react'
import LayoutHeader from "./activities/LayoutHeader";
import Spreadsheets from "./components/Entry/Spreadsheets";
import ContactSocket from './components/EntryContact/ContactSocket';

import { auth } from "./services/Firebase";

function App() {
  const [user, setUser] = useState(null); //เก็บ user login WithGoogle
  const [Token, setToken] = useState(""); //เก็บ user login WithGoogle
  // auth user staus
  useEffect(() => {

    auth.onAuthStateChanged((r) => {
      setUser(r);
    });
  }, []);





  const handelCreateContact = useCallback(() => {
      if (user != null) {
        user.getIdToken(true).then(function (idToken) {
       
          setToken(idToken)
        })
      
    }
  }, [user])


  const handelRemoveContact =() => {
    setToken("")
}





  return (
    <div>

  
      <LayoutHeader user={user} handel={{
        handelCreateContact: handelCreateContact,
        handelRemoveContact:handelRemoveContact
      }} />
      {Token ? <ContactSocket token={Token} />: null}
      <Spreadsheets user={user} />
      
     
      
    </div>
  );
}

export default App;
