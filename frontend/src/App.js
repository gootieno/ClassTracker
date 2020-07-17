import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Home from "./components/Home"
import Assessments from "./components/Assessments"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/me' component={Home} />
        <Route path='/assessments' component={Assessments} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
