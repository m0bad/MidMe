import { combineReducers } from 'redux';
import FetchMedsReducer from './FetchMedsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer,
    fetchMeds: FetchMedsReducer,
});
