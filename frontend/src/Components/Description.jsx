import React from 'react'

const Description = ({ problem }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-semibold mb-6">{problem.problem_title}</h2>
            <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full mr-4">{problem.problem_tag}</span>
                <span className="text-gray-600">Problem ID: {problem.problem_id}</span>
            </div>
            <p className="text-lg mb-6">{problem.problem_description}</p>
            <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Example Test Case</h3>
                <div className="mb-4">
                    <p className="text-gray-700"><strong>Input:</strong> {problem.example_testcases}</p>
                    <p className="text-gray-700"><strong>Output:</strong> {problem.example_result}</p>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <div>
                    <p className="text-gray-600">Submissions: {problem.submission_count}</p>
                    <p className="text-gray-600">Accepted Solutions: {problem.accepted_solution_count}</p>
                </div>
            </div>
        </div>
    )
}

export default Description