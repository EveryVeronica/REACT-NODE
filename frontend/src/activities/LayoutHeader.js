import "./LayoutHeader.css";


function LayoutHeader({ user,signIn,signOut,handle }) {

  return (
    <div className="LayoutHeader-header">
      <div className="left">
        {user ? <img src={user.photoURL} alt="a" /> : null}
        {user ? <button>{user.displayName}</button> : null}
        {handle ? <button onClick={handle.disconnect}>ตัดการเชื่อมต่อ</button> : null}
        {handle ? <button onClick={handle.connect}>SpreadOnline</button> : null}
       
      
        

      </div>

      <div className="right">{user ? <button onClick={signOut}>Sign Out</button> :  <button onClick={signIn}>signInWithGoogle</button>}</div>
    </div>
  );
}

export default LayoutHeader;
