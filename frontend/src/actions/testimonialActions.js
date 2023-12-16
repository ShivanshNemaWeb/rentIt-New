import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

//Add testimonial
export const addTestimonial = (storeId,stars,detail,history) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
              history.push('/login');
            }
            const userId = localStorage.getItem('userId');
           
            const response = await axios.post(`${baseURL}/testimonial/addTestimonial`,{storeId,userId,stars,detail},
            {
                headers: {
                  Authorization: token,
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(addTestimonialError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(addTestimonialSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(addTestimonialError("Something Went Wrong"));
        }
    }
}


export const addTestimonialSuccess = (data) => {
    return{
      type:'ADD_TESTIMONIAL_SUCCESS',
      payload:data
    }
}


export const addTestimonialError = (error) => {
    return{
      type:'ADD_TESTIMONIAL_ERROR',
      payload:error
    }
}

// Get Testimonials
export const getTestimonial = (storeId,history) => {
    return async(dispatch) => {
        try{           
            const response = await axios.get(`${baseURL}/testimonial/getTestimonial/${storeId}`);
     console.log(response)
            if(response.status!==200){
              console.log(response)
               dispatch(getTestimonialError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(getTestimonialSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(getTestimonialError("Something Went Wrong"));
        }
    }
}


export const getTestimonialSuccess = (data) => {
    return{
      type:'GET_TESTIMONIAL_SUCCESS',
      payload:data
    }
}


export const getTestimonialError = (error) => {
    return{
      type:'GET_TESTIMONIAL_ERROR',
      payload:error
    }
}