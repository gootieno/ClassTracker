import React from 'react';
import './landingpage.css';
import StudentLogin from './StudentLogin';
import { Divider, Grid } from '@material-ui/core';
import InstructorLogin from './InstructorLogin';

const LandingPage = () => {
	return (
		<div>
			<h1 id='landing-page__title'>Class Tracker</h1>
			<div className='login-container'>
				<div>
					<Grid container alignItems='center'>
						<StudentLogin />
						<Divider orientation='vertical' flexItem />
						<InstructorLogin />
					</Grid>
				</div>
			</div>

			<div className='landing-page-container__bottom'></div>
		</div>
	);
};

export default LandingPage;
