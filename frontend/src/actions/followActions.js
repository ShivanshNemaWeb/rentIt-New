import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

//Follow a Product
export const follow = (storeId,history) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
              history.push('/login');
            }
            const userId = localStorage.getItem('userId');
           
            const response = await axios.post(`${baseURL}/follow/follow`,{storeId,userId},
            {
                headers: {
                  Authorization: token,
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(followError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(followSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(followError("Something Went Wrong"));
        }
    }
}


export const followSuccess = (data) => {
    return{
      type:'FOLLOW_SUCCESS',
      payload:data
    }
}


export const followError = (error) => {
    return{
      type:'FOLLOW_ERROR',
      payload:error
    }
}

//Unfollow a product
export const  unfollow = (storeId,history) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            if(!token){
              history.push('/login')
            }
            const userId = localStorage.getItem('userId');
           
            const response = await axios.post(`${baseURL}/follow/unfollow`,{storeId,userId},
            {
                headers: {
                  Authorization: token,
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(unfollowError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(unfollowSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(unfollowError("Something Went Wrong"));
        }
    }
}


export const unfollowSuccess = (data) => {
    return{
      type:'UNFOLLOW_SUCCESS',
      payload:data
    }
}


export const unfollowError = (error) => {
    return{
      type:'UNFOLLOW_ERROR',
      payload:error
    }
}