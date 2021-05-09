import Repository from './Repository'

const add_appointment_resource ='/appointments/addAppointment'
const get_appointment_resource='/appointments/getAppointments'
const update_appointment_status_resource='/appointments/updateAppointmentStatus'
// const edit_services_resource='/services/updateServices'
// const delete_services_resource='/services/deleteServices'




export default {
  AddAppointment(appointment){
    console.log("repository",appointment);
     
      return Repository.post(`${add_appointment_resource}`, appointment)
  },
  UpdateAppointmentStatus(status){
    console.log("repository",status);
     
      return Repository.post(`${update_appointment_status_resource}`, status)
  },

  GetAppointments(){
    
      return Repository.get(`${get_appointment_resource}`)
  },
//   DeleteUserServices(id){
//     return Repository.post(`${delete_services_resource}`,{id})
// },

}