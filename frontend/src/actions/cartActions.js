import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL;
//Add Item
export const addItem = (productId,history) =>{
    return async (dispatch) => {
      try{
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
         if(!token){
          history.push('/login')
         }
        const response = await axios.post(`${baseURL}/cart/addItem`,{
            productId,
            userId
        },
        {
            headers: {
              Authorization: token,
            },
          })
        console.log(response);
          if(response.status===200){
            dispatch(addItemSuccess("Item added"));
          }
          else{
            if(response.status ===401 && response.data.error ==="Unauthorized: No token provided"){
                history.push('/login');
            }
            else{
                dispatch(addItemError("Something went Wrong"));
            }
          }
      }
      catch{
        dispatch(addItemError("Something went Wrong"));
    }
    }
  }

  export const addItemSuccess = (data) => {
    return{
      type:'ADD_ITEM_SUCCESS',
      payload:data
    }
}
  
  export const addItemError = (error) => {
    return {
       type :'ADD_ITEM_ERROR',
       payload : error
    }
  }

  //Get Items
  export const getItems = (history) =>{
    return async (dispatch) => {
      try{
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if(!token){
          history.push('/login');
        }
        const response = await axios.get(`${baseURL}/cart/getItems/${userId}`,
        {
            headers: {
              Authorization: token,
            },
          })
          console.log(response);
          if(response.status===200){
            dispatch(getItemsSuccess(response.data));
          }
          else{
            if(response.status ===401 && response.error ==="Unauthorized: No token provided"){
                history.push('/login');
            }
            else{
                dispatch(getItemsError("Something went Wrong"));
            }
          }
      }
      catch{
        dispatch(getItemsError("Something went Wrong"));
    }
    }
  }

  export const getItemsSuccess = (data) => {
    return{
      type:'GET_ITEM_SUCCESS',
      payload:data
    }
}
  
  export const getItemsError = (error) => {
    return {
       type :'GET_ITEM_ERROR',
       payload : error
    }
  }


//Delete an Item

export const deleteItem = (productId,history) =>{
    return async (dispatch) => {
      try{
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
         if(!token){
          history.push('/login');
         }
        const response = await axios.delete(`${baseURL}/cart/deleteItem`,
        {
          headers: {
            Authorization: token
          },
          data: {
            productId:productId,
            userId:userId
          }
        })
        
          console.log(response);
          if(response.status===200){
            dispatch(deleteItemSuccess(response.data));
          }
          else{
            if(response.status ===401 && response.error ==="Unauthorized: No token provided"){
                history.push('/login');
            }
            else{
                dispatch(deleteItemError("Something went Wrong"));
            }
          }
      }
      catch{
        dispatch(deleteItemError("Something went Wrong"));
    }
    }
  }


export const deleteItemSuccess = (data) => {
    return{
      type:'DELETE_ITEM_SUCCESS',
      payload:data
    }
}

export const deleteItemError = (error) => {
    return{
      type:'DELETE_ITEM_ERROR',
      payload:error
    }
}