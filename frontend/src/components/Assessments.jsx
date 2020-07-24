import React from 'react';
import NavBar from './navigation/NavBar';
import './assessments.css';
import AssessmentTable from './AssessmentTable';

export default function Assessments() {
	return (
		<div>
			<NavBar />
			<div className='assessments-container'>
				<div className='assessments-title'>
					<h1>Assessments</h1>
				</div>
				<div className='assessments-content'>
					<AssessmentTable />
				</div>
			</div>
		</div>
	);
}
