import axios from 'axios';
import config from './config.json'; 
const baseURL = config.baseURL; 

//Create a new Store
export const createProduct = (data,storeId) => {
    return async(dispatch) => {
        try{
            const token = localStorage.getItem('token');
            const userId = localStorage.getItem('userId');
            const formData = new FormData();
            console.log(data);
            formData.append('userId',userId);
            formData.append('storeId',storeId);
            formData.append('title',data.title);
            formData.append('price',data.price);
            formData.append('size',data.size);
            formData.append('color',data.color);
            formData.append('category',data.category);
            formData.append('descreption',data.descreption);
            formData.append('first-img',data.img1);
            formData.append('second-img',data.img2);
            formData.append('thired-img',data.img3);
            formData.append('fourth-img',data.img4);
            formData.append('fifth-img',data.img5);
            const response = await axios.post(`${baseURL}/product/createProduct`,formData,
            {
                headers: {
                  Authorization: token,
                  'Content-Type': 'multipart/form-data'
                },
              }
            );

            if(response.status!==200){
              console.log(response)
               dispatch(createProductError("Something Went Wrong"));
            }
            else{
                console.log(response);
                dispatch(createProductSuccess(response.data));
            }
        }
        catch(error){
          console.log(error);
            dispatch(createProductError("Something Went Wrong"));
        }
    }
}

//Get Stores
export const getProducts = (storeId) =>{
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('user');
      const response = await axios.get(`${baseURL}/product/getProducts/${storeId}`,{userId},
      {
          headers: {
            Authorization: token,
          },
        })
      
        if(response.status!==200){
          dispatch(getProductsError("Something Went Wrong"));
        }
        else{
          dispatch(getProductsSuccess(response.data));
          console.log(response);
        }
    }
    catch{
          dispatch(getProductsError("Something Went Wrong"));
    }
  }
}
//Create Store
export const createProductSuccess = (data) => {
    return{
      type:'CREATE_PRODUCT_SUCCESS',
      payload:data
    }
}

export const createProductError = (error) => {
    return{
      type:'CREATE_PRODUCT_ERROR',
      payload:error
    }
}

//Get products
export const getProductsSuccess = (data) => {
  return{
    type:'GET_PRODUCT_SUCCESS',
    payload:data
  }
}

export const getProductsError = (error) => {
  return{
    type:'GET_PRODUCT_ERROR',
    payload:error
  }
}

//Delete product

export const deleteProduct = (productId) =>{
  return async (dispatch) => {
    try{
      const token = localStorage.getItem('token');
      const response = await axios.delete(`${baseURL}/product/deleteProducts/${productId}`,
      {
          headers: {
            Authorization: token,
          },
        })
      
        if(response.status!==200){
          dispatch(deleteProductsError("Something Went Wrong"));
          
        }
        else{
          dispatch(deleteProductsSuccess(productId));
          console.log(response);
        }
    }
    catch{
          dispatch(deleteProductsError("Something Went Wrong"));
    }
  }
}

export const deleteProductsSuccess = (data) => {
  return{
    type:'DELETE_PRODUCT_SUCCESS',
    payload:data
  }
}

export const deleteProductsError = (error) => {
  return{
    type:'DELETE_PRODUCT_ERROR',
    payload:error
  }
}


//Get Wedding products
export const getWeddingProducts = () =>{
  return async (dispatch) => {
    try{
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`${baseURL}/product/getWeddingProducts/${userId}`)
      
        if(response.status!==200){
          dispatch(getWeddingProductsError("Something Went Wrong"));
          console.log(response  )
        }
        else{
          dispatch(getWeddingProductsSuccess(response.data));
          console.log(response);
        }
    }
    catch{
          dispatch(getWeddingProductsError("Something Went Wrong"));
    }
  }
}

export const getWeddingProductsSuccess = (data) => {
  return{
    type:'GET_WEDDING_PRODUCT_SUCCESS',
    payload:data
  }
}

export const getWeddingProductsError = (error) => {
  return{
    type:'GET_WEDDING_PRODUCT_ERROR',
    payload:error
  }
}

//Get Party products
export const getPartyProducts = () =>{
  return async (dispatch) => {
    try{
      const userId = localStorage.getItem('userId');

      const response = await axios.get(`${baseURL}/product/getPartyProducts/${userId}`)
      
        if(response.status!==200){
          dispatch(getPartyProductsError("Something Went Wrong"));
          
        }
        else{
          dispatch(getPartyProductsSuccess(response.data));
          console.log(response);
        }
    }
    catch{
          dispatch(getPartyProductsError("Something Went Wrong"));
    }
  }
}

export const getPartyProductsSuccess = (data) => {
  return{
    type:'GET_PARTY_PRODUCT_SUCCESS',
    payload:data
  }
}

export const getPartyProductsError = (error) => {
  return{
    type:'GET_PARTY_PRODUCT_ERROR',
    payload:error
  }
}

//Get Party products
export const getTraditionalProducts = () =>{
  return async (dispatch) => {
    try{
      const userId = localStorage.getItem('userId');

      const response = await axios.get(`${baseURL}/product/getTraditionalProducts/${userId}`)
      
        if(response.status!==200){
          dispatch(getTraditionalProductsError("Something Went Wrong"));
          
        }
        else{
          dispatch(getTraditionalProductsSuccess(response.data));
          console.log(response);
        }
    }
    catch{
          dispatch(getTraditionalProductsError("Something Went Wrong"));
    }
  }
}

export const getTraditionalProductsSuccess = (data) => {
  return{
    type:'GET_TRADITIONAL_PRODUCT_SUCCESS',
    payload:data
  }
}

export const getTraditionalProductsError = (error) => {
  return{
    type:'GET_TRADITIONAL_PRODUCT_ERROR',
    payload:error
  }
}
