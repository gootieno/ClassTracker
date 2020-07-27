import React from 'react';
import './landingpage.css';
import StudentLogin from './login/StudentLogin';
import { Divider, Grid } from '@material-ui/core';
import InstructorLogin from './login/InstructorLogin';

const LandingPage = () => {
	return (
		<div>
			<h1 id='landing-page__title'>Class Tracker</h1>
			<div className='login-container'>
				<div>
					<Grid container alignItems='center'>
						<StudentLogin />
						<div className='image-container'>
							<img
								className='login-page-image'
								src={require('../static/aa-student.png')}
								alt='students'
							/>
						</div>
						<InstructorLogin />
					</Grid>
				</div>
			</div>

			<div className='landing-page-container__bottom'></div>
		</div>
	);
};

export default LandingPage;
