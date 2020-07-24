import React, { useState } from 'react';
import './studentLogin.css';
import { Button, TextField } from '@material-ui/core';

export default function StudentLogin() {
	const [loginInput, setloginInput] = useState({ email: '', password: '' });
	return (
		<div className='student-login-container'>
			<h2>Student</h2>
			<form className='landing-page__student-form'>
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
