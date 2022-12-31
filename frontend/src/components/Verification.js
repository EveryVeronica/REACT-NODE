import React, { useState } from "react";
import axios from "axios";



function Verification({user}) {
  const [token, setToken] = useState("");

  function getToken() {
    user.getIdToken(true).then(function (idToken) {
       setToken(idToken);
    });

    // axios
    //   .get(
    //     "http://localhost:5000/",
    //     {
    //       params: {
    //         id: token,
    //       },
    //     },
    //     { crossdomain: true }
    //   )
    //   .then((res) => {});
  }

    return (
        <div>
        <button onClick={getToken}>
        getToken
        </button>
        <h1>{token}</h1>
  
      </div>
  );
}

export default Verification;
