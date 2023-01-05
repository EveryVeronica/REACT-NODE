import { useState, useEffect } from "react";
import "./App.css";
import LayoutHeader from "./components/LayoutHeader";
import Firebase from "./services/Firebase";
import Verification from "./components/Verification";
import SpreadOnline from "./components/SpreadOnline";
import Sheets from "./components/Spread/Sheets";

function App() {
  // const [user, setUser] = useState(null);
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   Firebase.auth().onAuthStateChanged((user) => {
  //     setUser(user);
  //   });
  // }, []);

  // if (user) {
  //   user.getIdToken(true).then(function (idToken) {
  //     setToken(idToken);
  //   });
  // }

  return (
    <div className="App">
   {/*    {user ? <LayoutHeader user={user} /> : <LayoutHeader user={null} />} */}
      {/*     {user ? <Verification token={token} /> : null} */}
      {/*   <SpreadOnline  /> */}
      
      {<Sheets/>}
    </div>
  );
}

export default App;
