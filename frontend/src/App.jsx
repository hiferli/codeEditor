import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Problem from './Pages/Problem';
import Home from './Pages/Home';

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
					<Router>
						<div className="container mx-auto px-4 py-8">
							<Routes>
								<Route path="/" element={<Home problems={allProblems} />} />
								<Route path="/problem/:id" element={<Problem problems={allProblems} />} />
							</Routes>
						</div>
					</Router>
			}
		</>
	)
}

export default App

