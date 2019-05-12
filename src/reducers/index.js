import { combineReducers } from 'redux';
import FetchMedsReducer from './FetchMedsReducer';
import FetchPharsReducer from './FetchPharsReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
    auth: AuthReducer,
    fetchMeds: FetchMedsReducer,
    fetchPhars: FetchPharsReducer
});
