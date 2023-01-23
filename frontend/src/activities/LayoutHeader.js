import React from 'react'
import "./LayoutHeader.css";

import { auth, signInWithGoogle } from "../services/Firebase"


function LayoutHeader({user}) {
  return (
    <div className="LayoutHeader-header">
      <div className="left">
        {user ? <img src={user.photoURL} alt="a" /> : null}
        {user ? <button>{user.displayName}</button> : null}
        
      </div>

      <div className="right">
        {user ? (
          <button onClick={()=>{auth.signOut()}}>Sign Out</button>
        ) : (
          <button onClick={signInWithGoogle}>signInWithGoogle</button>
        )}
      </div>
    </div>
  );
}

export default LayoutHeader;
