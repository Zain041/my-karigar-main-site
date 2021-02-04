import Repository from './Repository'

const register_resource ='/users/register'
const logIn_resource='/users/login'
const logOut_resource='/users/logout'

export default {
register(user){
    console.log(user);
     
      return Repository.post(`${register_resource}`, user)
  },

  logIn(user){
      return Repository.post(`${logIn_resource}`, user)
  },

logOut(){
    return Repository.post(`${logOut_resource}`, {})
}
}