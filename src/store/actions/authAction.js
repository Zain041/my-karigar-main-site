
import { REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS,  LOGIN_FAIL, FETCH_USERS, LOGOUT} from './types';
import { setAlert } from './alertActions'



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
var authRepository =RepositoryFactory.get("auth")




export const register = (user)=> async dispatch => {
   
                   
                      
                    try {
                       let {data}=  await authRepository.register(user)
                           console.log(data);
                            dispatch({
                                type: REGISTER_SUCCESS,
                              });
                              dispatch(setAlert("Account Created Successfully", "success"));
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: REGISTER_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}

export const LogIn = (user)=> async dispatch => {
   
                   
                      
    try {
       let {data}=  await authRepository.logIn(user)
           console.log(data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload:data
              });
              dispatch(setAlert("logged in Successfully", "success"));
              
       
             
        
    }catch (error) {
        dispatch({
            type: REGISTER_FAIL,
          });
          dispatch(setAlert(error.message, "danger"));
    }




}



// export const login = (user) => async dispatch => {
//     try {
        
//            var data = authRepository.login(user)


//     }catch (error) {
//         dispatch(setAlert('Invalid credentials', 'danger'))
//         dispatch({
//             type: LOGIN_FAIL,
//         });
//     }
// }

// export const logout = () => async dispatch => {
//     dispatch({
//         type: LOGOUT,
//     });
// }

// export const forgotPassword = (forgotEmail) => async dispatch => {
//     console.log("inside fun")
//     firebase.auth().sendPasswordResetEmail(forgotEmail)
    
//         .then(function () {
//             console.log("inside then")
            
//             dispatch(setAlert('Reset password email sent', 'success'))
//         })
//         .catch(function (error) {
//             console.log("inside catch")
//             dispatch(setAlert(error.message, 'danger'))
//         })
// }



// const  users = db.collection("users");
// export const updateUser = (_uid) => async dispatch =>{
	
//         users.doc(_uid).get().then((doc=>{
//             console.log('login updat')
//              localStorage.setItem('user',JSON.stringify(doc.data()))
           
            
//         }))
	
// }
// const  listings = db.collection("listings");



// export const fetchUsers = (obj) => async dispatch =>{
    

//     console.log(obj);
			
//     const data=[]
//     const temp_listings=[]

// users.where('state' , '==' ,obj.state,'service_industry','==',obj.service_industry,'region','==',obj.region)

// .get()
// .then(async (querySnapshot)=>{

//     querySnapshot.forEach(doc=>{
//         data.push({...doc.data(),id:doc.id});
        
        
        
//     })
//     console.log("users",data);
    
//    await  data.forEach(item=>{
//     listings.where("business_id","==",item.id).get()
//             .then(querySnapshot=>{
//                          querySnapshot.forEach(doc=>{
//                            temp_listings.push({...doc.data(),id:doc.id})
//                          })
//          })
//      })
//      console.log("temp-listings",temp_listings)
//     dispatch({
//         type: FETCH_USERS,
//         payload: temp_listings
        
//     })
// })




// }