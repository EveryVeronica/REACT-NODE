import React, { useEffect,useState } from 'react'
import LayoutHeader from "./activities/LayoutHeader";
import Spreadsheets from "./components/Entry/Spreadsheets";

import { auth } from "./services/Firebase";

function App() {
  const [user, setUser] = useState(null); //เก็บ user login WithGoogle

  // auth user staus
  useEffect(() => {

    auth.onAuthStateChanged((r) => {
      setUser(r);
    });
  }, []);




  return (
    <div>
   
      <LayoutHeader user={user} />

     
      <Spreadsheets user={user}/>

    </div>
  );
}

export default App;
