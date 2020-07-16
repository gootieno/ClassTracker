import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='navbar-container'>
			<div>
				<a href='/me'>
					<h4>Progress Tracker</h4>
				</a>
			</div>
			<NavLink className='navbar-container__navs' to='/assessments'>
				Assessments
			</NavLink>
			<NavLink className='navbar-container__navs' to='/classmates'>
				Classmates
			</NavLink>
			<NavLink className='navbar-container__navs' to='/final-projects'>
				Final Projects
			</NavLink>
			<NavLink className='navbar-container__navs' to='/conduct'>
				Annonymous Report
			</NavLink>
			<NavLink className='navbar-container__navs' to='/instructors'>
				Instructors
			</NavLink>
		</div>
	);
};

export default NavBar;
