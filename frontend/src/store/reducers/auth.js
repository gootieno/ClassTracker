export const TOKEN_KEY = 'class_tracker/authentication/token';

export const INSTRUCTOR_EMAIL = 'INSTRUCTOR_EMAIL';
export const INSTRUCTOR_NAME = 'INSTRUCTOR_NAME';
export const INSTRUCTOR_ID = 'INSTRUCTOR_ID';

export const STUDENT_EMAIL = 'STUDENT_EMAIL';
export const STUDENT_NAME = 'STUDENT_NAME';
export const STUDENT_ID = 'STUDENT_ID';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const COHORT_ID = 'COHORT_ID';

const removeToken = () => {
	window.localStorage.removeItem(TOKEN_KEY);
	window.location.href = '/';
	return {
		type: REMOVE_TOKEN,
	};
};

const setToken = (access_token) => ({ type: SET_TOKEN, access_token });
//const setComment = (access_token) => ({ type: SET_TOKEN, access_token });

export const loadStudentToken = () => async (dispatch) => {
	const access_token = window.localStorage.getItem(TOKEN_KEY);
	if (access_token) {
		dispatch(setToken(access_token));
	}
};

export const loadInstructorToken = () => async (dispatch) => {
	const access_token = window.localStorage.getItem(TOKEN_KEY);
	if (access_token) {
		dispatch(setToken(access_token));
	}
};

export const studentLogin = (email, password) => async (dispatch) => {
	console.log(email, password);
	try {
		console.log('retrieving');
		console.log(JSON.stringify({ email, password }));
		const response = await fetch('http://localhost:5000/students/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			const { access_token, student } = await response.json();
			console.log(student);
			window.localStorage.setItem(STUDENT_EMAIL, student.email);
			window.localStorage.setItem(STUDENT_NAME, student.first_name);
			window.localStorage.setItem(STUDENT_ID, student.id);
			window.localStorage.setItem(COHORT_ID, student.cohort_id);
			window.localStorage.setItem(TOKEN_KEY, access_token);
			// window.location.href = '/me';
			return dispatch(setToken(access_token));
		}
	} catch (error) {
		console.error(error);
	}
};

export const instructorLogin = (email, password) => async (dispatch) => {
	console.log(email, password);
	try {
		console.log('retrieving');
		console.log(JSON.stringify({ email, password }));
		const response = await fetch('http://localhost:5000/instructors/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
		});

		if (response.ok) {
			const { access_token, instructor } = await response.json();
			console.log(instructor);
			window.localStorage.setItem(INSTRUCTOR_EMAIL, instructor.email);
			window.localStorage.setItem(INSTRUCTOR_NAME, instructor.first_name);
			window.localStorage.setItem(INSTRUCTOR_ID, instructor.id);
			window.localStorage.setItem(COHORT_ID, instructor.cohort_id);
			window.localStorage.setItem(TOKEN_KEY, access_token);
			// window.location.href = '/me';
			return dispatch(setToken(access_token));
		}
	} catch (error) {
		console.error(error);
	}
};

export const logoutStudent = () => async (dispatch, getState) => {
	console.log('in the logout selector');
	window.localStorage.removeItem(TOKEN_KEY);
	dispatch(removeToken());
};

//REDUCERS
const initialState = {
	access_token: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOKEN: {
			return {
				...state,
				access_token: action.access_token,
			};
		}
		case REMOVE_TOKEN: {
			const newState = { ...state };
			delete newState.session.access_token;
			return newState;
		}
		default: {
			return state;
		}
	}
};
