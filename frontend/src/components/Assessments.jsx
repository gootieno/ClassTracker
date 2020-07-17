import React from "react"
import NavBar from "./NavBar"
import "./assessments.css"

export default function Assessments() {
  return (
    <div>
      <NavBar />
      <div className='assessments-container'>
        <div className='assessments-title'>
          <h2>Assessments</h2>
        </div>
        <div className='assessments-content'>
          <div className='assessments-content__items'>
            <p>Week 1 Assessment - JS/PY</p>
          </div>
        </div>
      </div>
    </div>
  )
}
