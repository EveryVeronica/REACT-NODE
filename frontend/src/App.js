import React from 'react'
import LayoutHeader from './activities/LayoutHeader';
import {auth} from "./services/Firebase"

function App() {
    const [user, setUser] = React.useState(null); //เก็บ user login WithGoogle


    // auth user staus
    React.useEffect(() => {
        auth.onAuthStateChanged((r) => {
            setUser(r)
        });
    }, []);


  return (
    <div>
        
          <LayoutHeader isLogon={user} />
          
    </div>
  )
}

export default App
