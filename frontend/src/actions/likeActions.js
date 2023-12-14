import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

//Like a Product
export const like = (productId,history) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
              history.push('/login');
            }
            const userId = localStorage.getItem('userId');
           
            const response = await axios.post(`${baseURL}/like/like`,{productId,userId},
            {
                headers: {
                  Authorization: token,
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(likeError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(likeSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(likeError("Something Went Wrong"));
        }
    }
}


export const likeSuccess = (data) => {
    return{
      type:'LIKE_SUCCESS',
      payload:data
    }
}


export const likeError = (error) => {
    return{
      type:'LIKE_ERROR',
      payload:error
    }
}

//Dislike a product
export const dislike = (productId,history) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
              history.push('/login')
            }
            const userId = localStorage.getItem('userId');
           
            const response = await axios.post(`${baseURL}/like/dislike`,{productId,userId},
            {
                headers: {
                  Authorization: token,
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(disLikeError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(disLikeSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(disLikeError("Something Went Wrong"));
        }
    }
}


export const disLikeSuccess = (data) => {
    return{
      type:'LIKE_SUCCESS',
      payload:data
    }
}


export const disLikeError = (error) => {
    return{
      type:'LIKE_ERROR',
      payload:error
    }
}