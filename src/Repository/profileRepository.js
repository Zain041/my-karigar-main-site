import Repository from './Repository'

const update_profile_resource ='/profiles/createOrUpdateProfile'
const get_profile_resource='/profiles/getCurrentUserProfile'
const upload_resource='/profiles/uploadPhoto'
const get_providers_resource='/profiles/getProviders'


export default {
  UpdateProfile(user){
    console.log("repository",user);
     
      return Repository.post(`${update_profile_resource}`, user)
  },

  GetUserProfile(){
      return Repository.post(`${get_profile_resource}`)
  },
  GetProviders(){
    return Repository.get(`${get_providers_resource}`)
},
 
   uploadProfile(avatar){
    const form = new  FormData()
      
       form.append("avatar" , avatar)
      

    
    return Repository.post(`${upload_resource}`,form)
}
}