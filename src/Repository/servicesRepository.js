import Repository from './Repository'

const add_services_resource ='/services/addServices'
const get_services_resource='/services/getCurrentUserServices'
const edit_services_resource='/services/updateServices'
const delete_services_resource='/services/deleteServices'




export default {
  AddServices(service){
    console.log("repository",service);
     
      return Repository.post(`${add_services_resource}`, service)
  },
  UpdateServices(service){
    console.log("repository",service);
     
      return Repository.post(`${edit_services_resource}`, service)
  },

  GetUserServices(id){
    console.log("inrepository",id)
      return Repository.post(`${get_services_resource}`,{id})
  },
  DeleteUserServices(id){
    return Repository.post(`${delete_services_resource}`,{id})
},

}