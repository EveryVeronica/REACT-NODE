import React, { useMemo } from 'react'

function ContactSocket({token}) {


  const Renders = useMemo(() => {
return "dddddddddddd"+token
  }, [token]);
  return (
    <div>
     { Renders}
    </div>
  )
}

export default ContactSocket
