import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import './assessments.css';

export default function Assessments() {
	const [assessments, setAssessments] = useState([]);

	useEffect(() => {
		const getAssessments = async () => {
			let storeAssessment = [];
			const result = await fetch('http://localhost:5000/assessments');
			const data = await result.json;
			for (const assessment in data) {
				storeAssessment.push(assessment);
			}
			setAssessments(...storeAssessment);
		};
	}, []);

	return (
		<div>
			<NavBar />
			<div className='assessments-container'>
				<div className='assessments-title'>
					<h1>Assessments</h1>
				</div>
				<div className='assessments-content'>
					<div className='assessments-content__items'>
						<ul>
							{assessments.map((assessment, i) => (
								<li key={i}>{assessment}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
