import Repository from './Repository'

const update_profile_resource ='/profiles/createOrUpdateProfile'
const get_profile_resource='/profiles/getCurrentUserProfile'
const upload_resource='/profiles/uploadPhoto'
const get_providers_resource='/profiles/getProviders'
const get_customers_resource='/profiles/getCustomers'
const search_providers_resource='/profiles/searchProviders'
const send_ratings_source='/profiles/sendRating'
const get_ratings_source ='/profiles/getReviews'


export default {
  UpdateProfile(user){
 
     
      return Repository.post(`${update_profile_resource}`, user)
  },
  SendRatings(ratings){

     
      return Repository.post(`${send_ratings_source}`, ratings)
  },
  GetRatings(obj){
   
     
      return Repository.post(`${get_ratings_source}`,obj)
  },

  
  GetCustomers(){
    return Repository.get(`${get_customers_resource}`)
},
GetUserProfile(){
  return Repository.post(`${get_profile_resource}`)
},
  SearchProviders(obj){
  
    const form = new  FormData()
    
    return Repository.post(`${search_providers_resource}`,{city:obj.city,category:obj.category})
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