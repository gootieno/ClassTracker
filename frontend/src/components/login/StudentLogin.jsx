import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './studentLogin.css';

export default function StudentLogin() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className='student-login-container'>
			<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				Student Login
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
			>
				<DialogTitle id='form-dialog-title' style={{ paddingBottom: '5px' }}>
					App Academy Student
				</DialogTitle>
				<DialogContent>
					<form className='landing-page__student-form'>
						<TextField
							id='standard-required'
							label='Email'
							type='email'
							style={{ paddingBottom: '10px' }}
						/>
						<br />
						<TextField
							id='standard-password-input'
							label='Password'
							type='password'
							autoComplete='current-password'
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
