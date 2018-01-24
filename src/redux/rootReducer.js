import { combineReducers } from 'redux';
import login from './reducers/login';
import { reducer as reduxFormReducer } from 'redux-form'

export default combineReducers({
    login,
    form : reduxFormReducer
});