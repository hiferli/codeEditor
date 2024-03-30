import React from 'react'
import { useParams } from 'react-router-dom';
import Description from '../Components/Description';
import Code from '../Components/Code';
import Testcases from '../Components/Testcases';


const Problem = ({ problems }) => {
    const { id } = useParams();
    const problem = problems.find(problem => problem.problem_id === parseInt(id));
    if (!problem) return <div>Problem not found</div>;

    return (
        <div class="grid grid-rows-2 grid-flow-col gap-4">
            <div className="row-span-3">
                <Description problem={problem} /> 
            </div>
            
            <div className="col-span-2">
                <Code />
            </div>
        </div>
    )
}

export default Problem