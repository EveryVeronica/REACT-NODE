import { useState, useEffect } from "react";

import "./App.css";
import Verification from "./components/Verification";


import LayoutHeader from "./components/LayoutHeader";

import Firebase from "./services/Firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);



    });
  }, []);

  console.log(user);

  return (
    <div className="App">
     
      {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />}
      <Verification user={user} />
      

    
    </div>
  );
}

export default App;
