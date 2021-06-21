import { ADD_JOBREQUEST_SUCCESS, FETCH_REQUESTCOMPLETE_JOBS_BUYER,SEND_JOBOFFER_SUCCESS,REJECT_JOBOFFER,ACCEPT_JOBOFFER,FETCH_JOBOFFER,SEND_JOBOFFER_FAIL, ADD_JOB_SUCCESS, ADD_JOB_FAIL, FETCH_JOBS, FETCH_INCOMPLETED_JOBS_SELLER, FETCH_INCOMPLETED_JOBS_BUYER, FETCH_COMPLETED_JOBS_BUYER, FETCH_COMPLETED_JOBS_SELLER, FETCH_REQUESTCOMPLETE_JOBS_SELLER, ADD_JOBREQUEST_FAIL, UPDATE_JOB_SUCCESS, UPDATE_JOB_FAIL, FETCH_ONGOING_JOBS_SELLER, FETCH_ONGOING_JOBS_BUYER, REJECT_JOBREQUEST_SUCCESS, REJECT_JOBREQUEST_FAIL, FETCH_OUTGOING_JOBREQUESTS, ACCEPT_JOBREQUEST_SUCCESS, ACCEPT_JOBREQUEST_FAIL, FETCH_INCOMING_JOBREQUESTS } from './types';
import { setAlert } from './alertActions'




import { RepositoryFactory } from '../../Repository/RepositoryFactory'
import Repository from '../../Repository/Repository'

var jobRepository = RepositoryFactory.get("jobs")




export const AddJobRequest = (request) => async dispatch => {

  console.log("request", request)


  try {

    console.log("inside try")
    let { data } = await jobRepository.AddJobRequest(request)
    console.log("request", data);
    dispatch({
      type: ADD_JOBREQUEST_SUCCESS,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
    // dispatch(FetchAppointments());




  } catch (error) {
    dispatch({
      type: ADD_JOBREQUEST_FAIL,
    });
    dispatch(setAlert(error.message, "danger"));
  }




}


export const AddJob = (job) => async dispatch => {

  console.log("request", job)


  try {

    console.log("inside try")
    let { data } = await jobRepository.PostJob(job)
    console.log("request", data);
    dispatch({
      type: ADD_JOB_SUCCESS,
      payload: data
    });
    dispatch(setAlert("job Requirements Posted Successfully", "success"));
    // dispatch(FetchAppointments());




  } catch (error) {
    dispatch({
      type: ADD_JOB_FAIL,
    });
    dispatch(setAlert(error.message, "danger"));
  }




}


export const AcceptJobRequest = (id) => async dispatch => {

  console.log("id", id)


  try {

    console.log("inside try")
    let { data } = await jobRepository.AcceptJobRequest(id)
    console.log("request", data);
    dispatch({
      type: ACCEPT_JOBREQUEST_SUCCESS,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
    dispatch(FetchIncomingJobRequests());




  } catch (error) {
    dispatch({
      type: ACCEPT_JOBREQUEST_FAIL,
    });
    dispatch(setAlert(error.message, "danger"));
  }




}

export const RejectJobRequest = (id) => async dispatch => {

  console.log("id", id)


  try {

    console.log("inside try")
    let { data } = await jobRepository.RejectJobRequest(id)
    console.log("request", data);
    dispatch({
      type: REJECT_JOBREQUEST_SUCCESS,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
    dispatch(FetchIncomingJobRequests());




  } catch (error) {
    dispatch({
      type: REJECT_JOBREQUEST_FAIL,
    });
    console.log(error.message)
    dispatch(setAlert(error.message, "danger"));
  }




}

// offers actions 
export const RejectJobOffer = (id) => async dispatch => {

  console.log("id", id)


  try {

    console.log("inside try")
    let { data } = await jobRepository.RejectJobOffer(id)
    console.log("request", data);
    dispatch({
      type: REJECT_JOBOFFER,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
    dispatch(FetchIncomingOffers())
    dispatch(FetchOngoingJobsAsBuyer())
   




  } catch (error) {
   
    console.log(error.message)
    dispatch(setAlert(error.message, "danger"));
  }




}
export const AcceptJobOffers = (id) => async dispatch => {

  console.log("id", id)


  try {

    console.log("inside try")
    let { data } = await jobRepository.AcceptJobOffer(id)
    console.log("request", data);
    dispatch({
      type: ACCEPT_JOBOFFER,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
    dispatch(FetchIncomingOffers())
    dispatch(FetchOngoingJobsAsBuyer())
    




  } catch (error) {
   
    console.log(error.message)
    dispatch(setAlert(error.message, "danger"));
  }




}

export const SendJobOffer = (offer) => async dispatch => {

  


  try {

    console.log("inside try")
    let { data } = await jobRepository.SendJobOffer(offer)
   
    dispatch({
      type: SEND_JOBOFFER_SUCCESS,
      payload: data
    });
    dispatch(setAlert("job Request Sent Successfully", "success"));
   




  } catch (error) {
    dispatch({
      type: SEND_JOBOFFER_FAIL,
    });
    dispatch(setAlert(error.message, "danger"));
  }




}

export const ChangeJobStatus = (status) => async dispatch => {




  try {


    let { data } = await jobRepository.ChangeJobStatus(status)

    dispatch({
      type: UPDATE_JOB_SUCCESS,
      payload: data
    });

    dispatch(FetchOngoingJobsAsSeller());
    dispatch(FetchOngoingJobsAsBuyer());
    dispatch(FetchRequestCompleteJobAsBuyer());
    dispatch(FetchRequestCompleteJobAsSeller());
    dispatch(FetchCompletedJobAsSeller());
    dispatch(FetchCompletedJobAsBuyer());
    dispatch(FetchIncompletedJobAsSeller());
    dispatch(FetchIncompletedJobAsBuyer());




  } catch (error) {
    dispatch({
      type: UPDATE_JOB_FAIL,
    });
    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchIncomingJobRequests = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetIncomingJobRequests()

    dispatch({
      type: FETCH_INCOMING_JOBREQUESTS,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchOutgoingJobRequests = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetOutgoingJobRequests()

    dispatch({
      type: FETCH_OUTGOING_JOBREQUESTS,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}



export const FetchOngoingJobsAsSeller = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetOngoingJobRequestsAsSeller()

    dispatch({
      type: FETCH_ONGOING_JOBS_SELLER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchIncomingOffers = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetIncomingJobOffers()

    dispatch({
      type: FETCH_JOBOFFER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchOngoingJobsAsBuyer = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetOngoingJobRequestsAsBuyer()

    dispatch({
      type: FETCH_ONGOING_JOBS_BUYER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchRequestCompleteJobAsSeller = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetRequestCompleteJobAsSeller()

    dispatch({
      type: FETCH_REQUESTCOMPLETE_JOBS_SELLER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchRequestCompleteJobAsBuyer = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetRequestCompleteJobAsBuyer()

    dispatch({
      type: FETCH_REQUESTCOMPLETE_JOBS_BUYER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchCompletedJobAsBuyer = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetCompleteJobsAsBuyer()

    dispatch({
      type: FETCH_COMPLETED_JOBS_BUYER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchCompletedJobAsSeller = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetCompleteJobsAsSeller()

    dispatch({
      type: FETCH_COMPLETED_JOBS_SELLER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchIncompletedJobAsSeller = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetincompleteJobsAsSeller()

    dispatch({
      type: FETCH_INCOMPLETED_JOBS_SELLER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchIncompletedJobAsBuyer = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetincompleteJobsAsBuyer()

    dispatch({
      type: FETCH_INCOMPLETED_JOBS_BUYER,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}

export const FetchJobs = () => async dispatch => {




  try {


    let { data } = await jobRepository.GetJobs()

    dispatch({
      type: FETCH_JOBS,
      payload: data
    });






  } catch (error) {

    dispatch(setAlert(error.message, "danger"));
  }




}







