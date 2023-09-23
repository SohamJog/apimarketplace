import React from 'react'

const apiUrl = "https://api.cloudnouns.com/v1/pfp";

function Navbar() {
  return (
    <>
        <div>
            {/* Display the fetched image */}
                <img
                src={apiUrl}
                alt="Profile Picture"
                className="rounded-full w-20 h-20"
                />
        </div>

        <div>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
        </div>
        
    

    </>
    
  )
}

export default Navbar