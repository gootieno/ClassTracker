import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { studentsReducer } from './reducers/students';
import { projectsReducer } from './reducers/projects';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
	session: authReducer,
	students: studentsReducer,
	projects: projectsReducer,
});

const configureStore = (initialState = {}) => {
	return createStore(
		reducers,
		initialState,
		composeEnhancers(applyMiddleware(thunk))
	);
};
export default configureStore;
