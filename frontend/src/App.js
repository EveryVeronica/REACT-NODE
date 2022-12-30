import { useState, useEffect } from 'react';

import './App.css';
import Quotes from './components/Quotes';
import LayoutHeader from './components/LayoutHeader';



import Login from './components/Login'; 
import Home from './components/Home';
import Firebase from './services/Firebase'; 




function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
      setUser(user)
    })
  },[])
  console.log(user);
  


  return (
    <div className="App">

<LayoutHeader />
      { user ? <Home user={user}/>  : <Login />}


   

    
    </div>
  );
}

export default App;
