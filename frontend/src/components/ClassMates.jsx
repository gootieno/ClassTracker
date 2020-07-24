import React from 'react';
import NavBar from './navigation/NavBar';
import './classmates.css';

export default function ClassMates() {
	return (
		<div>
			<NavBar />
			<h1 className='classmates-title'>Classmates</h1>
			<div className='classmates-card-container'>
				<div className='classmates-card'>
					<p>Classmate name</p>
					<p>Classmate pronounciation</p>
					<p>Classmate pronoun</p>
				</div>
				<div className='classmates-card'>
					<p>Classmate name</p>
					<p>Classmate pronounciation</p>
					<p>Classmate pronoun</p>
				</div>
				<div className='classmates-card'>
					<p>Classmate name</p>
					<p>Classmate pronounciation</p>
					<p>Classmate pronoun</p>
				</div>
			</div>
		</div>
	);
}
