export const STUDENT_TOKEN_KEY = 'class_tracker/authentication/token';

export const STUDENT_EMAIL = 'STUDENT_EMAIL';
export const STUDENT_NAME = 'STUDENT_NAME';
export const STUDENT_ID = 'STUDENT_ID';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';
export const COHORT_ID = 'COHORT_ID';

const removeToken = () => {
	window.localStorage.removeItem(STUDENT_TOKEN_KEY);
	window.location.href = '/';
	return {
		type: REMOVE_TOKEN,
	};
};

const setToken = (access_token) => ({ type: SET_TOKEN, access_token });
//const setComment = (access_token) => ({ type: SET_TOKEN, access_token });

export const loadStudentToken = () => async (dispatch) => {
	const access_token = window.localStorage.getItem(STUDENT_TOKEN_KEY);
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
			window.localStorage.setItem(STUDENT_TOKEN_KEY, access_token);
			window.location.href = '/me';
			return dispatch(setToken(access_token));
		}
	} catch (error) {
		console.error(error);
	}
};

export const logoutStudent = () => async (dispatch, getState) => {
	console.log('in the logout selector');
	window.localStorage.removeItem(STUDENT_TOKEN_KEY);
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
