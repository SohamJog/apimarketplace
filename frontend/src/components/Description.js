import React from 'react'

function Description() {
  return (
    <>
        <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Description and Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Box 1 */}
                <div className="border p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Box 1 Title</h4>
                <p>Box 1 content goes here. You can add more text or elements as needed.</p>
                </div>

                {/* Box 2 */}
                <div className="border p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Box 2 Title</h4>
                <p>Box 2 content goes here. You can add more text or elements as needed.</p>
                </div>

                {/* Box 3 */}
                <div className="border p-4 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2">Box 3 Title</h4>
                <p>Box 3 content goes here. You can add more text or elements as needed.</p>
                </div>
            </div>
        </div>

    </>
  )
}

export default Description