import { UPDATE_PROFILE_FAIL,UPDATE_PROFILE_SUCCESS,FETCH_SEARCHED_PROVIDERS,FETCH_REVIEWS,FETCH_CUSTOMERS,FETCH_PROVIDERS,FETCH_PROFILE,UPLOAD_PROFILE_FAIL,UPLOAD_PROFILE_SUCCESS} from '../actions/types';


const initialState = {
   
    profile:[],
    avatar:"",
    providers:[],
    searchResults:[],
    customers:[],
    reviews:[]
   
  
}

export default function profileReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case UPDATE_PROFILE_SUCCESS:
            console.log("inside reducer")
            return {
                ...state,
                
            }
            case FETCH_SEARCHED_PROVIDERS:
                
                return {
                    ...state,
                   
                    searchResults: action.payload
                }
                case FETCH_REVIEWS:
                
                return {
                    ...state,
                   
                    reviews: action.payload
                }
                case FETCH_PROFILE:
                
                return {
                    ...state,
                   
                    profile: action.payload
                }
                case FETCH_PROVIDERS:
                
                    return {
                        ...state,
                       
                        providers: action.payload
                    }
                    case FETCH_CUSTOMERS:
                
                        return {
                            ...state,
                           
                            customers: action.payload
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