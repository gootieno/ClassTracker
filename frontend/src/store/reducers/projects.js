export const projectsAdded = (projects) => {
	return {
		type: 'RECEIVE_PROJECTS',
		projects,
	};
};

//REDUCER

export const projectsReducer = (state = {}, action) => {
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'RECEIVE_PROJECTS':
			let nextState = {};
			action.projects.forEach(
				(project) => (nextState[project.project_id] = project)
			);
			return Object.assign(newState, nextState);
		default:
			return state;
	}
};

//SELECTORS
export const getProjectsByCohortId = (state, cohortId) => {
	let project = Object.values(state.projects).filter(
		(project) => (project.cohort_id = cohortId)
	);
	return project;
};
