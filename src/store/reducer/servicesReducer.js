import { ADD_SERVICES_SUCCESS,ADD_SERVICES_FAIL,FETCH_SERVICES,DELETE_SERVICES,UPDATE_PROFILE_SUCCESS} from '../actions/types';

const initialState = {
   
    services:[],
    
   
  
}

export default function servicesReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_SERVICES:
            console.log("inside reducer",payload)
            return {
                ...state,
                services:payload,
                
                
            }
        
                
                
      
       


       
       
        
       
        
        default:
            return state;
    }
}