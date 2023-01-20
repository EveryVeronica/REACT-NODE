

import SpreadSheets from "./Spreads/SpreadSheets";
import ManageRequest from "./SpreadsOnline/ManageRequest";


//หน้า logon
function Verification({ token }) {






  return (
    <div>

      

  
      {token ? <ManageRequest token={token} /> : null}
      
      {<SpreadSheets/>}
    </div>
  );
}

export default Verification;
