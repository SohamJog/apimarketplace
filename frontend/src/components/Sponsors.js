import React from 'react'

function Sponsors() {
  return (
    <>
      <div className="mt-8">
  <h3 className="text-4xl font-semibold mb-6 text-center">Our Integration</h3> {/* Increased font size and margin */}
  <div className="flex items-center justify-center space-x-8"> {/* Increased space-x */}
    {/* Sponsor 1 */}
    <div className="p-6 rounded-full shadow-md bg-transparent overflow-hidden"> {/* Increased padding and rounded-full */}
      <img src="/Assets/WalletConnect.png" alt="Sponsor 1" className="w-48 h-48 object-contain bg-transparent" /> {/* Increased image size */}
    </div>

    {/* Sponsor 2 */}
    <div className="p-6 rounded-full shadow-md bg-transparent overflow-hidden"> {/* Increased padding and rounded-full */}
      <img src="/Assets/nounsdao.png" alt="Sponsor 2" className="w-48 h-48 object-contain bg-transparent" /> {/* Increased image size */}
    </div>

    {/* Sponsor 3 */}
    <div className="p-6 rounded-full shadow-md bg-transparent overflow-hidden"> {/* Increased padding and rounded-full */}
      <img src="/Assets/thegraph.png" alt="Sponsor 3" className="w-48 h-48 object-contain bg-transparent" /> {/* Increased image size */}
    </div>

    {/* Sponsor 4 */}
    <div className="p-6 rounded-full shadow-md bg-transparent overflow-hidden"> {/* Increased padding and rounded-full */}
      <img src="/Assets/Scroll.png" alt="Sponsor 4" className="w-48 h-48 object-contain bg-transparent" /> {/* Increased image size */}
    </div>
  </div>
</div>

    </>

  )
}

export default Sponsors

