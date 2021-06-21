
import { UPDATE_PROFILE_FAIL,UPDATE_PROFILE_SUCCESS,FETCH_CUSTOMERS,FETCH_REVIEWS,FETCH_SEARCHED_PROVIDERS,FETCH_PROVIDERS,FETCH_PROFILE,UPLOAD_PROFILE_FAIL,UPLOAD_PROFILE_SUCCESS} from './types';
import { setAlert } from './alertActions'
import axios from 'axios';



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'
var authRepository =RepositoryFactory.get("auth")
var profileRepository=RepositoryFactory.get("profiles")




export const updateProfile = (user)=> async dispatch => {
   
    
                   
                      
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

export const SendRatings = (obj)=> async dispatch => {
   console.log("ratings",obj)
    
                   
                      
    try {

        console.log("inside try")
       let {data}=  await profileRepository.SendRatings(obj)
           console.log(data);
           
              dispatch(setAlert("Ratings uploaded Successfully", "success"));
              dispatch(fetchCurrentUserProfile());
              
       
             
        
    }catch (error) {
       
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

// fetch providers

export const FetchProviders = ()=> async dispatch => {
   
                   
                      
    try {
       let {data}=  await profileRepository.GetProviders()
       console.log("dataaaaa",data)
      
          
          
            dispatch({
                type: FETCH_PROVIDERS,
                payload:data
              });
             
              
       
             
        
    }catch (error) {
       
          dispatch(setAlert(error.message, "danger"));
    }




}
export const FetchCustomers = ()=> async dispatch => {
   
                   
                      
    try {
       let {data}=  await profileRepository.GetCustomers()
       console.log("dataaaaa",data)
      
          
          
            dispatch({
                type: FETCH_CUSTOMERS,
                payload:data
              });
             
              
       
             
        
    }catch (error) {
       
          dispatch(setAlert(error.message, "danger"));
    }




}
export const SearchProviders = (obj)=> async dispatch => {
    console.log("in action",obj)
   
                   
                      
    try {
       let {data}=  await profileRepository.SearchProviders(obj)
       console.log("dataaaaa",data)
      
          
          
            dispatch({
                type: FETCH_SEARCHED_PROVIDERS,
                payload:data
              });
             
              
       
             
        
    }catch (error) {
       
          dispatch(setAlert(error.message, "danger"));
    }




}



export const FetchRatings = (obj) => async dispatch => {




    try {
  
  
      let { data } = await profileRepository.GetRatings(obj)
  
      dispatch({
        type: FETCH_REVIEWS,
        payload: data
      });
  
  
  
  
  
  
    } catch (error) {
  
      dispatch(setAlert(error.message, "danger"));
    }
  
  
  
  
  }