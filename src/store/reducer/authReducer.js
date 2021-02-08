import { REGISTER_SUCCESS,REGISTER_FAIL,FETCH_USERS, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';


const initialState = {
   
    token: localStorage.getItem('token'),
    isRegistered: false,
    isAuthenticated: localStorage.getItem('isAuthenticated') === "true" ? true : false,
    user: localStorage.getItem('user') === "null" ? null : JSON.parse(localStorage.getItem('user')),
    loggedIn:JSON.parse(localStorage.getItem("loggedIn"))==null?false:true,
    profile:[]
   
  
}

export default function authReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
            console.log("inside reducer")
            return {
                ...state,
                loading: false,
                isRegistered: true
            }
            case FETCH_USERS:
                
                return {
                    ...state,
                   
                    searchResults: action.payload
                }
        case LOGIN_SUCCESS:

                console.log("payload",payload)
            localStorage.setItem('token', payload.token);
            localStorage.setItem('isAuthenticated', true)
            console.log('login suecess')
            localStorage.setItem('user', JSON.stringify(payload.user))
            localStorage.setItem('profile', JSON.stringify(payload.profile))
           
            return {
                ...state,
                user: payload.user || null, 
                token: payload.token,
                isAuthenticated: true,
                profile:payload.profile
                
               
            }
       


       
       
        
       
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('isAuthenticated', false)
            localStorage.removeItem('user', null)
          
            localStorage.clear();
            return {
                ...state,
                token: null,
                isRegistered: false,
                isAuthenticated: false,
              
                user: null,
               
            }
        default:
            return state;
    }
}