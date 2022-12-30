import { useState, useEffect } from "react";

import "./App.css";
import Quotes from "./components/Quotes";


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
      {user ? <LayoutHeader user={user} /> :<LayoutHeader user={null} /> }
    </div>
  );
}

export default App;
