import { ADD_SERVICES_SUCCESS,UPDATE_SERVICES_SUCCESS,UPDATE_SERVICES_FAIL,DELETE_SERVICES,ADD_SERVICES_FAIL,FETCH_SERVICES,UPDATE_PROFILE_SUCCESS} from './types';
import { setAlert } from './alertActions'
import axios from 'axios';



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'

var servicesRepository=RepositoryFactory.get("services")




export const AddServices = (service,id)=> async dispatch => {
   
    console.log("object",service)
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await servicesRepository.AddServices(service)
                           console.log( "service",data);
                            dispatch({
                                type: ADD_SERVICES_SUCCESS,
                                payload:data
                              });
                              dispatch(setAlert(data, "success"));
                              dispatch(FetchServices(id));
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: ADD_SERVICES_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}
export const UpdateServices = (service,id)=> async dispatch => {
   
    console.log("object",service,id)
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await servicesRepository.UpdateServices(service)
                           console.log( "service",data);
                            dispatch({
                                type: UPDATE_SERVICES_SUCCESS,
                                payload:data
                              });
                              
                              dispatch(FetchServices(id));
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: UPDATE_SERVICES_SUCCESS,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}
export const FetchServices = (id)=> async dispatch => {
   
    
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await servicesRepository.GetUserServices(id)
                           console.log( "service",data);
                            dispatch({
                                type: FETCH_SERVICES,
                                payload:data
                              });
                             
                           
                              
                       
                             
                        
                    }catch (error) {
                       
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}
export const DeleteServices = (ser_id,id)=> async dispatch => {
   
    
                   
                      
    try {

        console.log("inside try")
       let {data}=  await servicesRepository.DeleteUserServices(ser_id)
           console.log( "service",data);
            dispatch({
                type: DELETE_SERVICES,
                payload:data
              });
           
              dispatch(FetchServices(id));
             
           
              
       
             
        
    }catch (error) {
       
          dispatch(setAlert(error.message, "danger"));
    }




}