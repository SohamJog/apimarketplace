import React from 'react'

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Noun() {
  return (
    <>      

        <div className="w-44 h-40 relative">
        {/* Background Image */}
        {/* <img
            src="/Assets/woodenframe.png"
            alt="Background Image"
            className="w-44 h-40 absolute top-20 left-20 z-10"
        /> */}

        {/* Profile Picture */}
        <img
            src={apiUrl}
            alt="Profile Picture"
            className="w-220 h-220 absolute top-0 left-0 z-0 rounded-lg"
        />
        </div>

 

    </>
  )
}

export default Noun