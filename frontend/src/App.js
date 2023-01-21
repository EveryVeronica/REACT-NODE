import { useState, useEffect } from "react";
import "./App.css";
import LayoutHeader from "./activities/LayoutHeader";
import Firebase from "./services/Firebase";
import Verification from "./activities/Verification";




function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (user) {
    user.getIdToken(true).then(function (idToken) {
      setToken(idToken);
    });
  }

  return (
    <div className="App">
      {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />} 
    {user ? <Verification token={token} /> : null} 

      
      
    </div>
  );
}

export default App;
