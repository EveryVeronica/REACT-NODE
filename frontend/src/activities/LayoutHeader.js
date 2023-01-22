import React from 'react'
import "./LayoutHeader.css";

import { auth, signInWithGoogle } from "../services/Firebase"


function LayoutHeader({isLogon}) {
  return (
    <div className="LayoutHeader-header">
      <div className="left">
        {isLogon ? <img src={isLogon.photoURL} alt="a" /> : null}
        {isLogon ? <button>{isLogon.displayName}</button> : null}
        
      </div>

      <div className="right">
        {isLogon ? (
          <button onClick={()=>{auth.signOut()}}>Sign Out</button>
        ) : (
          <button onClick={signInWithGoogle}>signInWithGoogle</button>
        )}
      </div>
    </div>
  );
}

export default LayoutHeader;
