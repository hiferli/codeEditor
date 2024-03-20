import React from 'react'
import Card from '../Components/Card';

const Home = ({ problems }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                problems?.map(problem => 
                    ( <Card key={problem.problem_id} problem={problem} /> )
                )
            }
        </div>
    );
}

export default Home