import React from 'react';
import NavBar from '../navigation/NavBar';
import './contact_instructors.css';
import ContactInstructorCard from './ContactInstructorCard';

export default function ContactInstructors() {
	return (
		<div>
			<NavBar />
			<h1 className='contact-instructor-title'>Contact the Instructors</h1>
			<ContactInstructorCard />
		</div>
	);
}
