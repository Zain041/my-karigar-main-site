import { UPDATE_PROFILE_FAIL,UPDATE_PROFILE_SUCCESS,FETCH_PROFILE,UPLOAD_PROFILE_FAIL,UPLOAD_PROFILE_SUCCESS} from '../actions/types';


const initialState = {
   
    profile:[],
    avatar:""
   
  
}

export default function profileReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PROFILE_SUCCESS:
            console.log("inside reducer")
            return {
                ...state,
                
            }
            case FETCH_PROFILE:
                
                return {
                    ...state,
                   
                    profile: action.payload
                }
                case UPLOAD_PROFILE_SUCCESS:
                
                return {
                    ...state,
                   
                    avatar: action.payload
                }
      
       


       
       
        
       
        
        default:
            return state;
    }
}