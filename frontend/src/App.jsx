import { useEffect, useState } from 'react'
import './App.css'
import axios, { all } from 'axios'

function App() {
	const [loading, setLoading] = useState(false);
	const [allProblems, setAllProblems] = useState([]);

	const fetchProblems = async () => {
		setLoading(true);

		try {
			const response = await fetch("http://localhost:3000/problems", {
				method: "GET",
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (response.ok) {
				const result = await response.json();
				setAllProblems(result.result);
				// console.log(allProblems)
			}
		} catch (error) {
			console.log('Error while fetching problems from database: ' + error);
			alert(error);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchProblems();
	}, []);
	
	return (
		<>
			<h1>TUFCode</h1>
			{
				loading ? <h1>Loading</h1> : 
				<div>
					{
						allProblems && allProblems?.map(problem => (
							<div key={problem.problem_id}>{problem.problem_title}</div>
						))
					}
				</div>
			}
		</>
	)
}

export default App
