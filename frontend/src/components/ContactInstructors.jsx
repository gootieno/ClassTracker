import React from "react"
import NavBar from "./NavBar"
import "./contact_instructors.css"

export default function ContactInstructors() {
	return (
		<div>
			<NavBar />
			<h1 className='contact-instructors-title'>Contact the Instructors</h1>
			<div className='instructor-card-container'>
				<div className='instructor-card'>
					<p>image goes here</p>
					<p>Bryce Morgan</p>
					<p>bryce@morgan.com</p>
					<p>pronoun: he/him/his</p>
				</div>
				<div className='instructor-card'>
					<p>image goes here</p>
					<p>Bryce Morgan</p>
					<p>bryce@morgan.com</p>
					<p>pronoun: he/him/his</p>
				</div>
			</div>
		</div>
	)
}
