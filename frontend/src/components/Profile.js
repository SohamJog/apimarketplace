import React from 'react'

function Profile({apiUrl}) {
  return (

    <div>
       <img
            src={apiUrl}
            alt="Profile Picture"
            className="rounded-full w-20 h-20"
        /> 
    </div>

  )
}

export default Profile