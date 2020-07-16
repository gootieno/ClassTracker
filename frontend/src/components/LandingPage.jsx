import React from 'react';
import './landingpage.css';

const LandingPage = () => {
	return (
		<div className='landing-page-container'>
			<div className='landing-page-container__top'>
				<h1 id='landing-page__title'>Class Tracker</h1>
			</div>
			<div className='landing-page-form-container'>
				<div className='landing-page__student'>
					<h2 id='student-title'>Student?</h2>
					<button id='login-button'>sign in with github</button>
				</div>
				<div className='landing-page__instructor'>
					<h2 id='instructor-title'>Instructor?</h2>
					<form className='landing-page__instructor-form'>
						<input id='email' type='email'></input>
						<input id='password' type='password'></input>
						<button id='login-button'>Login</button>
					</form>
				</div>
			</div>

			<div className='landing-page-container__bottom'></div>
		</div>
	);
};

export default LandingPage;
