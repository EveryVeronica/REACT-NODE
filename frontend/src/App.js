import { useState, useEffect } from "react";
import "./App.css";
import LayoutHeader from "./activities/LayoutHeader";
import Verification from "./activities/Verification";
import { auth,signInWithGoogle } from "./services/Firebase";




function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [status , setStatus ] = useState(false);


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
     
      setUser(user);

    });
  }, []);

  const disconnect = () => {
    alert('false')
    setStatus(false)
  }
  
  const connect = () => {
    alert('true')
    setStatus(true)


  }



  return (
    <div className="App">
      {user ? <LayoutHeader user={user} handle={{
        disconnect: disconnect,
        connect:connect
      }} signOut={() => { auth.signOut() }} /> : <LayoutHeader user={null} signIn={signInWithGoogle}  />} 
      {user ? <Verification user={user} status={status} /> : null} 

      
      
    </div>
  );
}

export default App;
