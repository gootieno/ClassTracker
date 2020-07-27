import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logoutStudent } from '../../store/reducers/auth';
import Button from '@material-ui/core/Button';

const LogoutStudent = (props) =>
	props.loggedOut ? (
		<Redirect to='/' />
	) : (
		<a href='/'>
			<Button
				className='logout-button'
				id='logout'
				onClick={props.logoutStudent}
			>
				Logout
			</Button>
		</a>
	);

const mapStateToProps = (state) => {
	return {
		loggedOut: !state.session.access_token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		logoutStudent: () => dispatch(logoutStudent()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutStudent);
