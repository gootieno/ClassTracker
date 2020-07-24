import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Assessments from './components/assessments/Assessments';
import ClassMates from './components/classmates/Classmates';
import FinalProjects from './components/final_projects/FinalProjects';
import Conduct from './components/conduct/Conduct';
import ContactInstructors from './components/contact_instructors/ContactInstructors';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/me' component={Home} />
				<Route path='/assessments' component={Assessments} />
				<Route path='/classmates' component={ClassMates} />
				<Route path='/final-projects' component={FinalProjects} />
				<Route path='/conduct' component={Conduct} />
				<Route path='/contact-instructors' component={ContactInstructors} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
