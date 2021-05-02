
import authRepository from './authRepository'
import profileRepository from './profileRepository';
import servicesRepository from './servicesRepository';




const repositories = {

  
  auth:authRepository,
  profiles:profileRepository,
  services:servicesRepository


 
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
  
};