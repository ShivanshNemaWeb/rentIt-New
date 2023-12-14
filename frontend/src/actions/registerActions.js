import axios from 'axios';
import config from './config.json';
const baseURL = config.baseURL; 

export const register = (firstname,lastname,email,street,state,postalCode,country,countryCode,phoneNumber,password,history) => {

    return async (dispatch) => {
      try {
        // Make the API call with the token in the headers using Axios
        const response = await axios.post(`${baseURL}/auth/register`,{
            email,
            password,
            phoneNumber,
            firstname,
            lastname,
            address:{
                country,
                state,
                pinCode:postalCode,
                street,
            },
            countryCode
        })
        // Check if the response status is okay (2xx)
         if(response.status!==200){
            dispatch(registerError("Something Went Wrong"))
        }
        else{
           if(response.status ===200 && response.data.message==="User already exist" ){
            dispatch(registerError("User Already Exist"));
           }
           else{
            dispatch(registerSuccess(response.data.user));
            history.push('/login');
           }
        }
      } catch (error) {
        // Dispatch the error action if there's an error
        dispatch(registerError("Something Went Wrong"));
      }
    };
  };
  
  export const registerSuccess = (data) => {
      return {
        type: 'REGISTER_SUCCESS',
        payload: data,
      };
  };
  
  export const registerError = (error) => {
      return {
          type: 'REGISTER_ERROR',
          payload: error
      };
  }