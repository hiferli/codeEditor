import React from 'react';

const Testcases = ({ testcases, result }) => {
    return (
        <div className="text-center">
            <h2 className="text-lg font-semibold mb-2">Test Cases Editor</h2>
            <div className="flex justify-center">
                <textareax
                    className="h-20 w-40 border rounded p-2"
                    value={testcases}
                    // onChange={handleChange}
                    placeholder="Write your test cases here..."
                />
            </div>
        </div>
    );
}

export default Testcases;
