import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

//Create a new Store
export const createStore = (storeName,title,country,city,state,postalCode,street,houseNumber,account,ifsc,descreption,coverImg,profileImg) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const formData = new FormData();

            formData.append('storeName',storeName);
            formData.append('title',title);
            formData.append('country',country);
            formData.append('city',city);
            formData.append('state',state);
            formData.append('postalCode',postalCode);
            formData.append('street',street);
            formData.append('houseNumber',houseNumber);
            formData.append('accountNumber',account);
            formData.append('ifsc',ifsc);
            formData.append('descreption',descreption);
            formData.append('cover-img',coverImg);
            formData.append('profile-img',profileImg);
            formData.append('userId',userId);
            console.log(coverImg);
            const response = await axios.post(`${baseURL}/store/createStore`,formData,
            {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data'
                },
              }
            );

            if(response.status!==200){
               dispatch(createStoreError("Something Went Wrong"));
            }
            else{
                dispatch(createStoreSuccess("Store Created Successfully"));
            }
        }
        catch(error){
            dispatch(createStoreError("Something Went Wrong"));
        }
    }
}

//Update Store 
export const updateStore = (storeId, storeName, title , country, state, city, street, houseNumber, accountNumber, ifsc, descreption, facebook, instagram, twitter) => {
    return async(dispatch) => {
     try{
        const token = localStorage.getItem('token');
        const response = await axios.post(`${baseURL}/store/updateStore/${storeId}`,{storeName,
        title,country,state,city,street,houseNumber,accountNumber,ifsc,descreption,facebook,
        instagram,twitter},
        {
            headers: {
              Authorization: token,
              
            },
          }
        );
        if(response.status!==200){
            console.log(response);
            dispatch(updateStoreError("Something Went Wrong"));
        }
        else{
            dispatch(updateStoreSuccess(response.data.data));
        }
     }
     catch(error){
            console.log(error);
            dispatch(updateStoreError("Something Went Wrong"));
     }
    }
}

//Get Store
export const getStore = () => {
    return async(dispatch) => {
     try{
        console.log("from store actions");
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`${baseURL}/store/getStore/${userId}`,
        {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(response);
        if(response.status!==200){
            dispatch(getStoreError("Something Went Wrong"));
        }
        else{
            dispatch(getStoreSuccess(response.data.data));
        }
     }
     catch(error){
            dispatch(getStoreError("Something Went Wrong"));
     }
    }
}



//Create Store
export const createStoreSuccess = (data) => {
    return{
      type:'CREATE_STORE_SUCCESS',
      payload:data
    }
}

export const createStoreError = (error) => {
    return{
       type:'CREATE_STORE_ERROR',
       payload:error
    }
}


//Update Store
export const updateStoreSuccess = (data) => {
    return {
        type:'UPDATE_STORE_SUCCESS',
        payload:data
    }
}
export const updateStoreError = (error) => {
    return {
        type:'UPDATE_STORE_ERROR',
        payload:error
    }
}

//Get Store
export const getStoreSuccess = (data) => {
    return {
        type:'GET_STORE_SUCCESS',
        payload:data
    }
}
export const getStoreError = (error) => {
    return {
        type:'GET_STORE_ERROR',
        payload:error
    }
}


//Get All Stores
export const getAllStores = () => {
    return async(dispatch) => {
     try{
        const response = await axios.get(`${baseURL}/store/getAllStores/`);
        console.log(response);
        if(response.status!==200){
            dispatch(getAllStoreError("Something Went Wrong"));
        }
        else{
            dispatch(getAllStoreSuccess(response.data));
        }
     }
     catch(error){
            dispatch(getAllStoreError("Something Went Wrong"));
     }
    }
}

export const getAllStoreSuccess = (data) => {
    return {
        type:'GET_ALL_STORE_SUCCESS',
        payload:data
    }
}

export const getAllStoreError = (error) => {
    return {
        type:'GET_ALL_STORE_ERROR',
        payload:error
    }
}

//Get Store By StoreId
export const getStoreById = (storeId) => {
    return async(dispatch) => {
     try{
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`${baseURL}/store/getStoreById?storeId=${storeId}&userId=${userId}`);
        console.log(response);
        if(response.status!==200){
            console.log(response);
            dispatch(getStoreByIdError("Something Went Wrong"));
        }
        else{
            console.log(response);
            dispatch(getStoreByIdSuccess(response.data.data));
        }
     }
     catch(error){
        console.log(error);
            dispatch(getStoreByIdError("Something Went Wrong"));
     }
    }
}
export const getStoreByIdSuccess = (data) => {
    return {
        type:'GET_STORE_BY_ID_SUCCESS',
        payload:data
    }
}

export const getStoreByIdError = (error) => {
    return {
        type:'GET_STORE_BY_ID_ERROR',
        payload:error
    }
}
