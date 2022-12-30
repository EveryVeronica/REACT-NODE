

import "./LayoutHeader.css";
import { auth } from "../services/Firebase";
import { signInWithGoogle } from '../services/Firebase';

function LayoutHeader({user}) {


  if (user) {
    return (
      <div className="LayoutHeader-header">
          <div className="left">
        <img src={user.photoURL} alt="a" />
        <button>{user.displayName}</button>
     
      
          </div>

        <div className="right">
        <button onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    </div>
  );
  } else {



    return (
      
      <div className="LayoutHeader-header">
      <div className="left">
  
      </div>
  
    <div className="right">
    <button onClick={signInWithGoogle}>signInWithGoogle</button>
    </div>
  </div>


    )







  }



}

export default LayoutHeader;
