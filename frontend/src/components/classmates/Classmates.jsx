import React from 'react';
import NavBar from '../navigation/NavBar';
import ClassmateCard from './ClassmateCard';
import './classmates.css';

export default function ClassMates() {
	return (
		<div>
			<NavBar />
			<h1 className='classmates-title'>Classmates</h1>
			<div className='classmates-card-container'>
				<ClassmateCard />
			</div>
		</div>
	);
}
