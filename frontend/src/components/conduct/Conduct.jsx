import React from 'react';
import NavBar from '../navigation/NavBar';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import './conduct.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default function Conduct() {
	return (
		<div>
			<NavBar />
			<h1 className='conduct-title'>Code Of Conduct Violation Report</h1>
			<div className='conduct-guidelines'>
				<Typography>
					This form is to report incidents that may be a violation of the
					AppAcademy Code of Student Conduct, as well as inappropriate incidents
					involving any member of the AppAcademy staff. Please review the App
					Academy Code of Student Conduct if you have any questions.
				</Typography>
				<br />
				<Typography>
					Please provide as much information as possible about the incident
					(there is no text limit). Provide a detailed description, paying
					particular attention to the behaviors of those involved (what was said
					and done). Concrete, specific observations are most useful.
				</Typography>
				<br />
				<Typography>
					If we determine that a violation of the Code of Student Conduct has
					occurred, then we will follow the resolution process outlined here.{' '}
				</Typography>
				<br />
				<Typography>
					By default your submission will be anonymous. We can work with you to
					actively mediate a resolution process if you include your full name.
				</Typography>
				<br />
				<Typography>
					Your submission will be viewable by the Director of Operations (HR),
					the Diversity & Inclusion Coordinator and the Head of Instructional.
				</Typography>
			</div>

			<form className='conduct-form' align='center'>
				<TextField
					id='outlined-multiline-static'
					label='Enter submission here'
					multiline
					rows={10}
					variant='outlined'
					style={{ width: 650, marginTop: 50 }}
				/>
				<InputLabel
					style={{ marginTop: 40 }}
					id='demo-simple-select-filled-label'
				>
					Please select your location
				</InputLabel>
				<Select
					labelId='demo-simple-select-filled-label'
					id='demo-simple-select-filled'
					style={{ width: 100 }}
				>
					<MenuItem value={10}>Online</MenuItem>
					<MenuItem value={20}>SF</MenuItem>
					<MenuItem value={30}>NY</MenuItem>
				</Select>
				<br />
				<Button
					style={{ marginTop: 20, marginBottom: 50 }}
					variant='contained'
					color='primary'
				>
					Submit
				</Button>
			</form>
		</div>
	);
}
