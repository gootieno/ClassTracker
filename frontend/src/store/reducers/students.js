export const studentsAdded = (students) => {
	return {
		type: 'RECEIVE_STUDENTS',
		students,
	};
};

//REDUCER

export const studentsReducer = (state = {}, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'RECEIVE_STUDENTS':
			let nextState = {};
			action.students.forEach((student) => (nextState[student.id] = student));
			return Object.assign(newState, nextState);
		default:
			return state;
	}
};

//SELECTORS
export const getStudentsByCohortId = (state, cohortId) => {
	let student = Object.values(state.students).filter(
		(student) => (student.cohortId = cohortId)
    );
    return student
};
