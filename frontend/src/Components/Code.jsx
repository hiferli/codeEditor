import React from 'react'
import Editor from "@monaco-editor/react";
import Testcases from './Testcases';

const Code = () => {
    const language = "javascript";
    const handleLanguageChange = () => { };
    const handleSubmit = () => {};
    const handleRun = () => {}

    return (
        <div className='border border-gray-300 rounded-md'>
            <div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-md">
                <label htmlFor="language" className="mr-2 text-sm font-semibold">Language:</label>
                <select id="language" value={language} onChange={handleLanguageChange} className="p-1 border rounded text-sm">
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    {/* Add more options for other languages */}
                </select>
            </div>

            <Editor
                lineNumbers='off'
                height="60vh"
                width="50vw"
                language={language}
                theme="vs-dark"
                // value={code}
                options={{
                    inlineSuggest: true,
                    fontSize: "15px",
                    formatOnType: true,
                    autoClosingBrackets: true,
                    minimap: { scale: 10 }
                }}
            />

            <div className="flex">
                <Testcases />
                <div className="flex flex-col justify-between ml-auto m-4">
                    <button onClick={handleRun} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-2">
                        Run
                    </button>
                    <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Code