import React from 'react';
import NavBar from '../navigation/NavBar';
import './final_projects.css';
import FinalProjectsTables from './FinalProjectTables';

export default function FinalProjects() {
	return (
		<div>
			<NavBar />
			<h1 className='final-projects-title'>Final Projects</h1>
			<div className='final-projects-container'>
				<FinalProjectsTables />
			</div>
		</div>
	);
}
