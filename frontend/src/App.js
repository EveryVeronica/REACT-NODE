import { useState, useEffect } from "react";
import "./App.css";
import LayoutHeader from "./activities/LayoutHeader";
import Verification from "./activities/Verification";
import { auth,signInWithGoogle } from "./services/Firebase";




function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
     
      setUser(user);

    });
  }, []);







  return (
    <div className="App">
      {user ? <LayoutHeader user={user} signOut={()=>{auth.signOut()}}/> : <LayoutHeader user={null} signIn={signInWithGoogle} />} 
    {user ? <Verification user={user} /> : null} 

      
      
    </div>
  );
}

export default App;
