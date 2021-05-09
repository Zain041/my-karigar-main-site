import { ADD_APPOINTMENT_SUCCESS,ADD_APPOINTMENT_FAIL,UPDATE_APPOINTMENT_SUCCESS,UPDATE_APPOINTMENT_FAIL,FETCH_APOINTMENTS} from './types';
import { setAlert } from './alertActions'
import axios from 'axios';



import {RepositoryFactory} from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'

var appointmentRepository=RepositoryFactory.get("appointments")




export const AddAppointment = (appointment)=> async dispatch => {
   
    console.log("appointment",appointment)
                   
                      
                    try {

                        console.log("inside try")
                       let {data}=  await appointmentRepository.AddAppointment(appointment)
                           console.log( "appointment",data);
                            dispatch({
                                type: ADD_APPOINTMENT_SUCCESS,
                                payload:data
                              });
                              dispatch(setAlert(data.msg, "success"));
                              dispatch(FetchAppointments());
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: ADD_APPOINTMENT_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}

export const UpdateAppointmentStatus = (status)=> async dispatch => {
   
   
                   
                      
                    try {

                        
                       let {data}=  await appointmentRepository.UpdateAppointmentStatus(status)
                          
                            dispatch({
                                type: UPDATE_APPOINTMENT_SUCCESS,
                                payload:data
                              });
                              dispatch(setAlert(data, "success"));
                              dispatch(FetchAppointments());
                              
                       
                             
                        
                    }catch (error) {
                        dispatch({
                            type: UPDATE_APPOINTMENT_FAIL,
                          });
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}

export const FetchAppointments = ()=> async dispatch => {
   
    
                   
                      
                    try {

                       
                       let {data}=  await appointmentRepository.GetAppointments()
                           
                            dispatch({
                                type: FETCH_APOINTMENTS,
                                payload:data
                              });
                             
                           
                              
                       
                             
                        
                    }catch (error) {
                       
                          dispatch(setAlert(error.message, "danger"));
                    }
                
      
              
      
}





