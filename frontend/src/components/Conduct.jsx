import React from "react"
import NavBar from "./NavBar"
import "./conduct.css"

export default function Conduct() {
	return (
		<div>
			<NavBar />
			<h1 className='conduct-title'>Code Of Conduct Violation Report</h1>
			<div className='conduct-guidelines'>
				<p>
					This form is to report incidents that may be a violation of the
					AppAcademy Code of Student Conduct, as well as inappropriate incidents
					involving any member of the AppAcademy staff. Please review the App
					Academy Code of Student Conduct if you have any questions.
				</p>
				<p>
					Please provide as much information as possible about the incident
					(there is no text limit). Provide a detailed description, paying
					particular attention to the behaviors of those involved (what was said
					and done). Concrete, specific observations are most useful.
				</p>
				<p>
					If we determine that a violation of the Code of Student Conduct has
					occurred, then we will follow the resolution process outlined here.{" "}
				</p>
				<p>
					By default your submission will be anonymous. We can work with you to
					actively mediate a resolution process if you include your full name.
				</p>
				<p>
					Your submission will be viewable by the Director of Operations (HR),
					the Diversity & Inclusion Coordinator and the Head of Instructional.
				</p>
			</div>
			<form className='conduct-form'>
				<input
					type='textarea'
					placeholder='Please enter your submission here'
				></input>
				<p>Please select school location</p>
				<select id='location'>
					<option value='SF'>SF</option>
					<option value='NY'>NY</option>
					<option value='Online'>Online</option>
				</select>
				<br />
				<button id='conduct-submit'>Submit</button>
			</form>
		</div>
	)
}
