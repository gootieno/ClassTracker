import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadStudentToken } from './store/reducers/auth';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Assessments from './components/assessments/Assessments';
import ClassMates from './components/classmates/Classmates';
import FinalProjects from './components/final_projects/FinalProjects';
import Conduct from './components/conduct/Conduct';
import ContactInstructors from './components/contact_instructors/ContactInstructors';
import ProtectedRoute from './components/ProtectedRoute';

function App(props) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
		props.tokenLoad();
	});

	if (!loaded) {
		return null;
	} else {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={LandingPage} />
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/me'
						component={Home}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/assessments'
						component={Assessments}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/classmates'
						component={ClassMates}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/final-projects'
						component={FinalProjects}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/conduct'
						component={Conduct}
					/>
					<ProtectedRoute
						isLoggedIn={props.token}
						path='/contact-instructors'
						component={ContactInstructors}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.session.access_token,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		tokenLoad: () => dispatch(loadStudentToken()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
