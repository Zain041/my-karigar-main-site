import { FETCH_APOINTMENTS} from '../actions/types';

const initialState = {
   
    appointments:[],
    
   
  
}

export default function appointmentReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_APOINTMENTS:
            console.log("inside reducer",payload)
            return {
                ...state,
                appointments:payload,
                
                
            }
        
                
                
      
       


       
       
        
       
        
        default:
            return state;
    }
}