import { FETCH_OUTGOING_JOBREQUESTS,FETCH_REQUESTCOMPLETE_JOBS_BUYER,FETCH_REQUESTCOMPLETE_JOBS_SELLER,FETCH_INCOMPLETED_JOBS_SELLER,FETCH_INCOMPLETED_JOBS_BUYER,FETCH_COMPLETED_JOBS_BUYER,FETCH_COMPLETED_JOBS_SELLER,FETCH_INCOMING_JOBREQUESTS,FETCH_ONGOING_JOBS_SELLER,FETCH_ONGOING_JOBS_BUYER} from '../actions/types';

const initialState = {
   
    outgoingRequests:[],
    incomingRequests:[],
    buyerOngoingJobs:[],
    sellerOngoingJobs:[],
    buyerRequestCompleteJobs:[],
    sellerRequestCompleteJobs:[],
   sellerCompletedJobs:[],
   buyerCompletedJobs:[],
   sellerIncompleteJobs:[],
   buyerIncompleteJobs:[],
  
}

export default function jobsReducer (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_INCOMING_JOBREQUESTS:
            console.log("inside reducer",payload)
            return {
                ...state,
                incomingRequests:payload,
                
                
            }

            case FETCH_OUTGOING_JOBREQUESTS:
            console.log("inside reducer",payload)
            return {
                ...state,
                outgoingRequests:payload,
                
                
            }
            case FETCH_ONGOING_JOBS_BUYER:
            console.log("inside reducer",payload)
            return {
                ...state,
                buyerOngoingJobs:payload,
                
                
            }
            case FETCH_REQUESTCOMPLETE_JOBS_SELLER:
            console.log("inside reducer",payload)
            return {
                ...state,
                sellerRequestCompleteJobs:payload,
                
                
            }
            case FETCH_ONGOING_JOBS_SELLER:
                console.log("inside reducer",payload)
                return {
                    ...state,
                    sellerOngoingJobs:payload,
                    
                    
                }
                case FETCH_REQUESTCOMPLETE_JOBS_BUYER:
                    console.log("inside reducer",payload)
                    return {
                        ...state,
                        buyerRequestCompleteJobs:payload,
                        
                        
                    }
                    case FETCH_COMPLETED_JOBS_SELLER:
                    console.log("inside reducer",payload)
                    return {
                        ...state,
                        sellerCompletedJobs:payload,
                        
                        
                    }
                    case FETCH_COMPLETED_JOBS_BUYER:
                    console.log("inside reducer",payload)
                    return {
                        ...state,
                        buyerCompletedJobs:payload,
                        
                        
                    }
                    case FETCH_INCOMPLETED_JOBS_BUYER:
                    console.log("inside reducer",payload)
                    return {
                        ...state,
                        buyerIncompleteJobs:payload,
                        
                        
                    }
                    case FETCH_INCOMPLETED_JOBS_SELLER:
                    console.log("inside reducer",payload)
                    return {
                        ...state,
                        sellerIncompleteJobs:payload,
                        
                        
                    }
        
                
                
      
       


       
       
        
       
        
        default:
            return state;
    }
}