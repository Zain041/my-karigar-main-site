
import { UPDATE_PROFILE_FAIL,UPDATE_PROFILE_SUCCESS,FETCH_PROFILE,UPLOAD_PROFILE_FAIL,UPLOAD_PROFILE_SUCCESS} from './types';
import { setAlert } from './alertActions'
import axios from 'axios';



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'
var authRepository =RepositoryFactory.get("auth")
var profileRepository=RepositoryFactory.get("profiles")




export const updateProfile = (user)=> async dispatch => {
   
    console.log("object",user)
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await profileRepository.UpdateProfile(user)
                           console.log(data);
                            dispatch({
                                type: UPDATE_PROFILE_SUCCESS,
                                payload:data
                              });
                              dispatch(setAlert("profile Updated Successfully", "success"));
                              dispatch(fetchCurrentUserProfile());
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: UPDATE_PROFILE_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}
export const uploadProfile = (avatar)=> async dispatch => {
    console.log(avatar)
   
                   console.log("inside action")
                      
    try {
       let {data}=  await profileRepository.uploadProfile(avatar)
       console.log("inside try")
           console.log(data.profile.avatar);
            dispatch(fetchCurrentUserProfile(),{
                type: UPLOAD_PROFILE_SUCCESS,
                payload:data
              });
              dispatch(setAlert("profile Uploaded Successfully", "success"));
             
              
       
             
        
    }catch (error) {
        dispatch({
            type: UPLOAD_PROFILE_FAIL,
          });
          dispatch(setAlert(error.message, "danger"));
    }




}

export const fetchCurrentUserProfile = ()=> async dispatch => {
   
                   
                      
    try {
       let {data}=  await profileRepository.GetUserProfile()
       console.log("dataaaaa",data)
       localStorage.setItem('profile',JSON.stringify(data))
          
          
            dispatch({
                type: FETCH_PROFILE,
                payload:data
              });
             
              
       
             
        
    }catch (error) {
       
          dispatch(setAlert(error.message, "danger"));
    }




}


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