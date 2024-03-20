import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ problem }) => {
    return (
        <Link to={`/problem/${problem.problem_id}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold">{problem.problem_title}</h2>
                <p className="text-gray-500 mt-2">{problem.problem_tag}</p>
                <div className="mt-4">
                    <p>Total Submissions: {problem.submission_count}</p>
                    <p>Accepted Solutions: {problem.accepted_solution_count}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card