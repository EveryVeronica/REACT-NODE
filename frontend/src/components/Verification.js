import React, { useState, useEffect } from "react";
import ManageRequest from "../components/ManageRequest";


//หน้า logon
function Verification({ token }) {






  return (
    <div>

      

      {/*  แสดงหน้า Chatbox */}
      {token ? <ManageRequest token={token}/> : null}
    </div>
  );
}

export default Verification;
