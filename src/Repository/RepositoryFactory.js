
import appointmentRepository from './appointmentRepository';
import authRepository from './authRepository'
import jobRequestsRepository from './jobRequestsRepository';
import notificationsRepository from './notificationsRepository';
import profileRepository from './profileRepository';
import servicesRepository from './servicesRepository';




const repositories = {

  
  auth:authRepository,
  profiles:profileRepository,
  services:servicesRepository,
  appointments:appointmentRepository,
  notifications:notificationsRepository,
  jobs:jobRequestsRepository


 
};

// eslint-disable-next-line import/prefer-default-export
export const RepositoryFactory = {
  get: name => repositories[name],
  
};