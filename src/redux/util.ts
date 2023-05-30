import { AxiosResponse } from 'axios';
import { v4 as uuid } from 'uuid';
import { OriginalType, UpdatedType } from './Types';


// add id and isActive property to our searched result 
// [{x:'x'}, {y:'y'}]  => [{x:'x', id:123, isActtive: false}, {y:'y', id: 283, isActtive: false}]


export function includeActiveProp(originalData: OriginalType): UpdatedType {
   return originalData?.map((item: OriginalType) => ({
    ...item,
    id: item.id || uuid(), // making sure id is accesible
    isActive: false,
  }));
}


export const timeoutPromise = (duration: number = 4000) => new Promise<AxiosResponse>(( _, reject) =>{
    setTimeout(() => {
      return reject( new Error('Request Timed Out!'))
    }, duration);
  }) 


  export function processError(error:string){
      switch(true){
        case error.includes('Network'): 
        return{
          errorMessage: 'Connection Failure!',
          errorDetail: `We couldn't load the page due to connection error, check your WiFi or Signal`,
          linkTitle: 'Retry'
        }

        case error.includes('Request Timed Out'): 
        return{
          errorMessage: 'Connection Request Timed Out!',
          errorDetail: 'Error from our end, We terminated the request due to maximum load on our network.',
          linkTitle: 'Try again later'
        }

        default : 
        return{
          errorMessage: error,
          errorDetail: `We encountered ${error}`,
          linkTitle: 'Retry'
        }
      }
  }