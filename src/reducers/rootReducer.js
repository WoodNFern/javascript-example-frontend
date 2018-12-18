import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import loggingReducer from './loggingReducer';

export default combineReducers({
    simpleReducer,
    loggingReducer
});