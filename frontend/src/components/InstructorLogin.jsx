import React from 'react';
import './instructorLogin.css';
import { Button, TextField } from '@material-ui/core';

function InstructorLogin() {
	return (
		<div className='instructor-login-container'>
			<h2 id='instructor-title'>Instructor?</h2>
			<form className='landing-page__instructor-form'>
				<TextField
					required
					id='standard-required'
					label='Required'
					type='email'
					defaultValue='Email'
				/>
				<br />
				<TextField
					id='standard-password-input'
					label='Password'
					type='password'
					autoComplete='current-password'
				/>
				<br />
				<Button color='secondary'>Login</Button>
			</form>
		</div>
	);
}

export default InstructorLogin;
