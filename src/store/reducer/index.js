import {combineReducers} from 'redux'


import authReducer from './authReducer';
import alertReducer from './alertReducer';
import profileReducer from './profileReducer';
import servicesReducer from './servicesReducer';




export default combineReducers({
   
    auth:authReducer,
    alert:alertReducer,
    profile:profileReducer,
    service:servicesReducer
    
    
})