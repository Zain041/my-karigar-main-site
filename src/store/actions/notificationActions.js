import {ADD_NOTIFICATION_SUCCESS,ADD_NOTIFICATION_FAIL,FETCH_NOTIFICATIONS} from './types';
import { setAlert } from './alertActions'
import axios from 'axios';



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'

var notificationstRepository=RepositoryFactory.get("notifications")




export const ClearNotifications = ()=> async dispatch => {
   
    
                   
                      
                    try {

                        console.log("inside notif")
                       let {data}=  await notificationstRepository.ClearNotifications()
                           console.log( "notifications",data);
                            dispatch({
                                type: ADD_NOTIFICATION_SUCCESS,
                                payload:data
                              });
                              dispatch(setAlert(data, "success"));
                              dispatch(FetchNotifications());
                          
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: ADD_NOTIFICATION_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}



export const FetchNotifications = ()=> async dispatch => {
   
    
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await notificationstRepository.GetNotifications()
                           console.log( "service",data);
                            dispatch({
                                type: FETCH_NOTIFICATIONS,
                                payload:data
                              });
                             
                           
                              
                       
                             
                        
                    }catch (error) {
                       
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}





