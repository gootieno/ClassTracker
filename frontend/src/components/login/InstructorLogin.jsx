import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function InstructorLogin() {
	const [open, setOpen] = useState(false);
	const [email, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button
				style={{ borderColor: 'red', color: 'red' }}
				variant='outlined'
				color='secondary'
				onClick={handleClickOpen}
			>
				Instructor Login
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title' style={{ paddingBottom: '5px' }}>
					App Academy Instructor
				</DialogTitle>
				<DialogContent>
					<form className='landing-page__instructor-form'>
						<TextField
							id='standard-required'
							label='Email'
							type='email'
							style={{ paddingBottom: '10px' }}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<br />
						<TextField
							id='standard-password-input'
							label='Password'
							type='password'
							autoComplete='current-password'
							onChange={(e) => setPassword(e.target.value)}
						/>
						<br />
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancel
					</Button>
					<Button onClick={handleClose} color='primary'>
						Login
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
