import Repository from './Repository'

const send_jobrequest_resource ='/jobRequests/sendJobRequest'
const get_incomingJobRequests_resource ='/jobRequests/getIncomingJobRequest'
const get_getoutgoingjobrequests_resource ='/jobRequests/getOutgoingJobRequest'
const acceptjobrequest_resource ='/jobRequests/acceptJobRequest'
const rejectjobrequest_resource ='/jobRequests/rejectJobRequest'
const changejobstatus_resource ='/jobRequests/changeJobStatus'
const get_completedjobsasbuyer_resource ='/jobRequests/getCompletedJobsAsBuyer'
const get_completedjobsasseller_resource ='/jobRequests/getCompletedJobsAsSeller'
const get_requestcompletejobsasbuyer_resource ='/jobRequests/getRequestCompleteJobsAsBuyer'
const get_requestcompletejobsasseller_resource ='/jobRequests/getRequestCompleteJobsAsSeller'

const get_incompletejobsasseller_resource ='/jobRequests/getIncompleteJobsAsSeller'
const get_incompletejobsasbuyer_resource ='/jobRequests/getIncompleteJobsAsBuyer'

const get_ongoingjobsasseller_resource ='/jobRequests/getOngoingJobsAsSeller'
const get_ongoingjobsasbuyer_resource ='/jobRequests/getOngoingJobsAsBuyer'
const get_jobs_resource ='/jobs/getJobs'
const post_job_resource='/jobs/postJob'

const post_jobOffer_resource='offers/sendJobOffer'
const accept_jobOffer_resource='/offers/acceptJobOffer'
const reject_jobOffer_resource='/offers/rejectJobOffer'
const get_joboffers_resource='/offers/getIncomingJobOffers'





export default {
// job offers start
SendJobOffer(offer){
  console.log("repository",offer);
   
    return Repository.post(`${post_jobOffer_resource}`, offer)
},

GetIncomingJobOffers(){
    
  return Repository.post(`${get_joboffers_resource}`)
},


  AddJobRequest(request){
    console.log("repository",request);
     
      return Repository.post(`${send_jobrequest_resource}`, request)
  },
  AcceptJobOffer(id){
    return Repository.post(`${accept_jobOffer_resource}`,id)
},

RejectJobOffer(id){
  return Repository.post(`${reject_jobOffer_resource}`,id)
},
  GetIncomingJobRequests(){
   
     
      return Repository.post(`${get_incomingJobRequests_resource}`)
  },

  GetOutgoingJobRequests(){
    
      return Repository.post(`${get_getoutgoingjobrequests_resource}`)
  },
  GetOngoingJobRequestsAsSeller(){
    
    return Repository.post(`${get_ongoingjobsasseller_resource}`)
},
GetOngoingJobRequestsAsBuyer(){
    
  return Repository.post(`${get_ongoingjobsasbuyer_resource}`)
},
  AcceptJobRequest(id){
    return Repository.post(`${acceptjobrequest_resource}`,id)
},

RejectJobRequest(id){
  return Repository.post(`${rejectjobrequest_resource}`,id)
},

ChangeJobStatus(request){
  return Repository.post(`${changejobstatus_resource}`,request)
},
GetRequestCompleteJobAsBuyer(){
  return Repository.post(`${get_requestcompletejobsasbuyer_resource}`)
},
GetRequestCompleteJobAsSeller(){
  return Repository.post(`${get_requestcompletejobsasseller_resource}`)
},
GetCompleteJobsAsBuyer(){
  return Repository.post(`${get_completedjobsasbuyer_resource}`)
},
GetCompleteJobsAsSeller(){
  return Repository.post(`${get_completedjobsasseller_resource}`)
},
GetincompleteJobsAsBuyer(){
  return Repository.post(`${get_incompletejobsasbuyer_resource}`)
},
GetincompleteJobsAsSeller(){
  return Repository.post(`${get_incompletejobsasseller_resource}`)
},
PostJob(job){
  return Repository.post(`${post_job_resource}`,job)
},

GetJobs(){
  return Repository.get(`${get_jobs_resource}`)
},


}