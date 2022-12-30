import React from 'react'
import { auth } from '../services/Firebase'


function Home({user}) {
  return (
    <div>
          <h1> Hello ,{user.displayName}</h1>
          <h2 >{user.uid}</h2>
       
          <img src={user.photoURL} alt="a"/>
          <button onClick={() => auth.signOut()}>Sign Out</button>
          
    </div>
  )
}

export default Home
