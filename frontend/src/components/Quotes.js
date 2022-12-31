import React , { useState } from 'react'
import axios from 'axios'
function Quotes({user}) {


  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')
  const [token, setToken] = useState('')




    function getQuote() {
      console.log('onclick');




console.log('dddddddddddddddddddddddddddd'+user.displayName);
user.getIdToken().then(function(idToken) {  // <------ Check this line
  console.log(idToken); // It shows the Firebase token now
  setToken(idToken)

});


     axios.get('http://localhost:5000/', {
        
      params: {
        id: token
      }
        
      
        }
      , { crossdomain: true })
      .then(res => {
        setText(res.data.text)
        setAuthor(res.data.author)
      }) 



    }
    


  return (
    <div>
      <button onClick={getQuote}>
        ggggggggg
      </button>
      <h1>{text}</h1>
      <h3>{'-' + author}</h3>
    </div>
  )
}

export default Quotes
