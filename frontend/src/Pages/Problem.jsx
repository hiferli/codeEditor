import React from 'react'
import { useParams } from 'react-router-dom';


const Problem = ({ problems }) => {
    const { id } = useParams();
    const problem = problems.find(problem => problem.problem_id === parseInt(id));

    if (!problem) return <div>Problem not found</div>;

    return (
        <div>
            <h2>{problem.problem_title}</h2>
            <p>{problem.problem_tag}</p>
        </div>
    )
}

export default Problem