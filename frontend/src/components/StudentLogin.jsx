import React, { useState } from 'react';
import './studentLogin.css';

export default function StudentLogin() {
	const [loginInput, setloginInput] = useState({ email: '', password: '' });
	return (
		<div>
			<form className='landing-page__student-form'>
				<p className='email'>EMAIL</p>
				<input
					type='email'
					name='email'
					id='email'
					value={loginInput.email}
					onChange={(e) =>
						setloginInput({ ...loginInput, email: e.target.value })
					}
				/>
				<p className='password'>PASSWORD</p>
				<input
					type='password'
					name='password'
					id='password'
					value={loginInput.password}
					onChange={(e) =>
						setloginInput({ ...loginInput, password: e.target.value })
					}
				/>
				<br />
				<button id='login-button'>sign in with github</button>
			</form>
		</div>
	);
}
