import { studentsAdded } from '../reducers/students';
import { projectsAdded } from '../reducers/projects';

export const fetchStudents = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/students/${id}`);
	if (!response.ok) throw response;
	const { students } = await response.json();
	dispatch(studentsAdded(students));
};

export const fetchCohortProjects = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/projects/${id}`);
	if (!response.ok) throw response;
	const { projects } = await response.json();
	dispatch(projectsAdded(projects));
};
