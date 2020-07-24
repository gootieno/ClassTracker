import React from "react"
import NavBar from "./navigation/NavBar"
import "./final_projects.css"

export default function FinalProjects() {
  return (
    <div>
      <NavBar />
      <h1 className='final-projects-title'>Final Projects</h1>
      <div className='final-projects__sort-container'>
        <button>Sort By Student Name</button>
        <button>Sort By Project Name</button>
      </div>
      <div className='final-projects__cycle'>
        <h2>OL - August</h2>
        <div className='final-projects__list'>
          <div className='final-projects__students'>
            <h3>Student</h3>
            <p className='student-name'>Jeff Otieno</p>
            <p className='student-name'>James Robertson</p>
          </div>
          <div className='final-projects__project-name'>
            <h3>Final Projects</h3>
            <p className='project-name'>SneakFlix</p>
            <p className='project-name'>Slick</p>
          </div>
          <div className='final-projects__project-clone'>
            <h3>App Clone</h3>
            <p className='project-clone'>Netflix</p>
            <p className='project-clone'>Slack</p>
          </div>
          <div className='final-projects__github'>
            <h3>Github Repo</h3>
            <p>
              <a href='github.com'>GIT</a>
            </p>
            <p>
              <a href='github.com'>GIT</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
