
import authRepository from './authRepository'
import profileRepository from './profileRepository';




const repositories = {

  
  auth:authRepository,
  profiles:profileRepository


 
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
  
};