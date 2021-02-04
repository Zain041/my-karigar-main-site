
import authRepository from './authRepository'




const repositories = {

  
  auth:authRepository


 
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
  
};