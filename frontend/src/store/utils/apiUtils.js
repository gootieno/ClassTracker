import { studentsAdded } from '../reducers/students';

export const fetchStudents = (id) => async (dispatch) => {
	const response = await fetch(`http://localhost:5000/students/${id}`);
	if (!response.ok) throw response;
	const { students } = await response.json();
	dispatch(studentsAdded(students));
};
