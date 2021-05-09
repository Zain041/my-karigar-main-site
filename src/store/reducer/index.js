import {combineReducers} from 'redux'


import authReducer from './authReducer';
import alertReducer from './alertReducer';
import profileReducer from './profileReducer';
import servicesReducer from './servicesReducer';
import appointmentReducer from './appointmentReducer';

import notificationReducer from './notificationReducer';
import jobsReducer from './jobsReducer';




export default combineReducers({
   
    auth:authReducer,
    alert:alertReducer,
    profile:profileReducer,
    service:servicesReducer,
    appointment:appointmentReducer,
    notification:notificationReducer,
    jobs:jobsReducer
    
    
})