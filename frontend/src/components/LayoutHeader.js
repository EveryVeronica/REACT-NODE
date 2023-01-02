import { useState, useEffect } from "react";

import "./LayoutHeader.css";
import { auth } from "../services/Firebase";
import { signInWithGoogle } from "../services/Firebase";

function LayoutHeader({ user }) {
  const btnSignIn = (
    <button onClick={signInWithGoogle}>signInWithGoogle</button>
  );
  const btnSignOut = <button onClick={() => auth.signOut()}>Sign Out</button>;

  return (
    <div className="LayoutHeader-header">
      <div className="left">
        {user ? <img src={user.photoURL} alt="a" /> : null}
        {user ? <button>{user.displayName}</button> : null}
      </div>

      <div className="right">{user ? btnSignOut : btnSignIn}</div>
    </div>
  );
}

export default LayoutHeader;
