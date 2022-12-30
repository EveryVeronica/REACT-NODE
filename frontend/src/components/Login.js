
import React from 'react';

import { signInWithGoogle } from '../services/Firebase';





function Login() {


 

  return (
    <div>
      <button onClick={signInWithGoogle} >
      signInWithGoogle 
      </button>
    </div>
  )
}

export default Login
