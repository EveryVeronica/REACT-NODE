import { useState, useEffect } from "react";
import "./App.css";
import LayoutHeader from "./components/LayoutHeader";
import Firebase from "./services/Firebase";


import io from "socket.io-client";
import Verification from "./components/Verification";
const socket = io.connect("http://localhost:3001");

function App() {

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {

      setUser(user);
      
    });
  }, []);

  console.log(user);

  if (user) {
    user.getIdToken(true).then(function (idToken) {

      setToken(idToken)
  
    });
  }

  
  return (
    <div className="App">

      {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />}
      {user ? <Verification token={token } /> : null }
           

    </div>
  );
}




export default App;
