import React from 'react'

const Testcases = () => {
    return (
        <div className="flex-1 mt-4">
            <h2 className="text-lg font-semibold mb-4">Test Cases Editor</h2>
            <textarea
                className="border rounded-lg p-2 w-full h-48"
                // value={testCases}
                // onChange={handleChange}
                placeholder="Write your test cases here..."
            />
        </div>
    )
}

export default Testcases