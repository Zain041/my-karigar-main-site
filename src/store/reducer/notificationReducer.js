import { FETCH_NOTIFICATIONS} from '../actions/types';

const initialState = {
   
    notifications:[],
    
   
  
}

export default function notificationReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_NOTIFICATIONS:
            console.log("inside reducer",payload)
            return {
                ...state,
                notifications:payload,
                
                
            }
        
                
                
      
       


       
       
        
       
        
        default:
            return state;
    }
}