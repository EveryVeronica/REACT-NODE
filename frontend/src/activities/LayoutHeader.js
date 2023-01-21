import "./LayoutHeader.css";
import { auth } from "../services/Firebase";
import { signInWithGoogle } from "../services/Firebase";

function LayoutHeader({ user,signIn,signOut,handle }) {

  return (
    <div className="LayoutHeader-header">
      <div className="left">
        {user ? <img src={user.photoURL} alt="a" /> : null}
        {user ? <button>{user.displayName}</button> : null}

       <button onClick={handle.disconnect}>ตัดการเชื่อมต่อ</button>
      <button   onClick={handle.connect}>SpreadOnline</button>
        

      </div>

      <div className="right">{user ? <button onClick={signOut}>Sign Out</button> :  <button onClick={signIn}>signInWithGoogle</button>}</div>
    </div>
  );
}

export default LayoutHeader;
