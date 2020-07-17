import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar-container-left'>
				<NavLink
					id='class-tracker'
					className='navbar-container-row__navs'
					to='/me'
				>
					Class Tracker
				</NavLink>
				<NavLink className='navbar-container-row__navs smaller' to='/assessments'>
					Assessments
				</NavLink>
				<NavLink className='navbar-container-row__navs smaller' to='/classmates'>
					Classmates
				</NavLink>
				<NavLink className='navbar-container-row__navs smaller' to='/final-projects'>
					Final Projects
				</NavLink>
				<NavLink className='navbar-container-row__navs smaller' to='/conduct'>
					Annonymous Report
				</NavLink>
				<NavLink className='navbar-container-row__navs smaller' to='/contact-instructors'>
					Instructors
				</NavLink>
			</div>
			<div className='navbar-container-right'>Name Here</div>
		</div>
	);
};

export default NavBar;
