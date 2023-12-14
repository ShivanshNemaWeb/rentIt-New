import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      // Make the API call with the token in the headers using Axios
      const response = await axios.get(`${baseURL}/user/getUser/${userId}`);

      // Check if the response status is okay (2xx)
      if (response.status !== 200) {
        // Handle error response
        dispatch(fetchUserError("Something Went Wrong"));
      }

      // Retrieve the data from the Axios response
      const data = response.data.data;
      // Dispatch the success action with the retrieved data
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      // Dispatch the error action if there's an error
      dispatch(fetchUserError("Something Went Wrong"));
    }
  };
};

export const fetchUserSuccess = (data) => {
    return {
      type: 'FETCH_USER_SUCCESS',
      payload: data,
    };
};

export const fetchUserError = (error) => {
    return {
        type: 'FETCH_USER_ERROR',
        payload: error
    };
}