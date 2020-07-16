import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StudentBackOffice from './components/StudentBackOffice';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={LandingPage} />
				<Route path='/me' component={StudentBackOffice} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
