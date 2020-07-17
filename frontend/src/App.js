import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Assessments from "./components/Assessments"
import ClassMates from "./components/ClassMates"
import FinalProjects from "./components/FinalProjects"
import Conduct from "./components/Conduct"

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
			</Switch>
		</BrowserRouter>
	)
}

export default App
