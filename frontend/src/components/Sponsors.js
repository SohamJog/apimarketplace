import React from 'react'

function Sponsors() {
  return (
    <>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Our Integration</h3>
        <h3 className="mb-4 text-center">Our Integration</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Sponsor 1 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="/Users/eliezerdubizh/Desktop/apimarketplace/frontend/src/Assets/WalletConnect.png" alt="Sponsor 1" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Sponsor 2 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="sponsor2.jpg" alt="Sponsor 2" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Sponsor 3 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="sponsor3.jpg" alt="Sponsor 3" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Sponsor 4 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="sponsor4.jpg" alt="Sponsor 4" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Sponsor 5 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="sponsor5.jpg" alt="Sponsor 5" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Sponsor 6 */}
          <div className="border p-2 rounded-lg shadow-md">
            <div className="w-32 h-32">
              <img src="sponsor6.jpg" alt="Sponsor 6" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Sponsors

