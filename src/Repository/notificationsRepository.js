import Repository from './Repository'

const get_notification_resource ='/notifications/getNotifications'
const clear_notification_resource='/notifications/clearNotifications'

// const edit_services_resource='/services/updateServices'
// const delete_services_resource='/services/deleteServices'




export default {
  ClearNotifications(){
    
     
      return Repository.post(`${clear_notification_resource}`)
  },


  GetNotifications(){
    
      return Repository.post(`${get_notification_resource}`)
  },
//   DeleteUserServices(id){
//     return Repository.post(`${delete_services_resource}`,{id})
// },

}