import React from 'react'

const Code = () => {
    return (
        <div className="flex-1">
            <h2 className="text-lg font-semibold mb-4">Code Editor</h2>
            <textarea
                className="border rounded-lg p-2 w-full h-48"
                // value={code}
                // onChange={handleChange}
                placeholder="Write your code here..."
            />
        </div>
    )
}

export default Code