import axios from 'axios';
import config from './config.json';
import { fetchUser } from './userActions';
const baseURL = config.baseURL; 

export const login = (email,password,history) => {

    return async (dispatch) => {
      try {
        // Make the API call with the token in the headers using Axios
        const response = await axios.post(`${baseURL}/auth/login`,{
            email,password
        })
        // Check if the response status is okay (2xx)
         if(response.status===401){
            dispatch(loginError("User not found"));
         }
        else if(response.status!==200){
            dispatch(loginError("User Not Found"))
        }
        else{
            localStorage.setItem('token',response.data.data.token);
            localStorage.setItem('userId',response.data.data.userId);
            dispatch(fetchUser(response.data.data.userId));
            history.push('/');
            dispatch(loginSuccess(response.data.data));
        }
      } catch (error) {
        // Dispatch the error action if there's an error
        dispatch(loginError("User Not Found"));
      }
    };
  };
  
  export const loginSuccess = (data) => {
      return {
        type: 'LOGIN_SUCCESS',
        payload: data,
      };
  };
  
  export const loginError = (error) => {
      return {
          type: 'LOGIN_ERROR',
          payload: error
      };
  }