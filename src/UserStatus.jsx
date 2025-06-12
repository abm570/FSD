import React, { useState } from 'react'

const UserStatus = () => {
    const [state, setState] = useState(true);

  return (
    <div>
        <h2>User Status</h2>
      {
        state ? 
        (
            <p style={{color:'red'}}>Offline</p>
        )

        :

        (
            <p style={{color:'green'}}>Online</p>
        )
      }

      <button onClick={() => {setState(!state)}}>{state ? "Go Online" : "Go Offline"}</button>
    </div>
  )
}

export default UserStatus
