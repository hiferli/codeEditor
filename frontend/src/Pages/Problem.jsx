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
        < div className="container mx-auto px-4 py-8" >
            <div className="flex">
                <div className="w-1/2 pr-4">
                    <Description />
                </div>
                <div className="w-1/2 pl-4">
                    <div className="flex flex-col">
                        <Code />
                        <Testcases />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Problem