import React from 'react';
import './home.css';
import NavBar from './navigation/NavBar';
import Button from '@material-ui/core/Button';

const studentName = window.localStorage.getItem('STUDENT_NAME');
let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
const yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const Home = () => {
	return (
		<div>
			<NavBar />
			<div className='home-container'>
				<div className='home__welcome-message'>
					<h1>
						Hey, {studentName} Today is {today}
					</h1>
				</div>
				<div className='home__app-academy-link'>
					<a href='https://open.appacademy.io/login'>App Academy Online</a>
				</div>
				<div className='home__zoom-meeting'>
					<Button
						variant='outlined'
						color='primary'
						onClick={() => window.open('https://zoom.us/j/266842059')}
					>
						Connect to Zoom
					</Button>
					<p>
						<b>Zoom Password:</b> iPo0(9#dx}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
