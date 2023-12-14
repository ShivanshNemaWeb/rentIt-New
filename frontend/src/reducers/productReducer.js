const initialState = {
       products:[],
       error:null ,
       weddingProducts:[],
       partyProducts:[],
       traditionalProducts:[],
       loading:false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
      case 'CREATE_PRODUCT_SUCCESS':
        return {
            ...state,
            error:null,
            loading:false
        }
      case 'CREATE_PRODUCT_ERROR':
        return {
            ...state,
            error:action.payload,
            loading:false

        }
      case 'GET_PRODUCT_SUCCESS':
        return {
          ...state,
          error:null,
          products:action.payload,
          loading:false

        }
        case 'GET_PRODUCT_ERROR':
        return {
            ...state,
            error:action.payload,
            loading:false

        }
        case 'DELETE_PRODUCT_SUCCESS':
          return {
              ...state,
              error:null,
              // products : state.products.filter(function(data){
              //   if(data.data._id!==action.payload){
              //     return data
              //   }
               
              // }),
              loading:false

          }
        case 'DELETE_PRODUCT_ERROR':
          return {
              ...state,
              error:action.payload,
              loading:false

          }

        case 'GET_WEDDING_PRODUCT_SUCCESS':
          return{
            ...state,
            error:null,
            weddingProducts:action.payload,
            loading:false

          }
        
          case 'GET_PARTY_PRODUCT_SUCCESS':
            return{
              ...state,
              error:null,
              partyProducts:action.payload,
              loading:false

            }
          
            case 'GET_TRADITIONAL_PRODUCT_SUCCESS':
          return{
            ...state,
            error:null,
            traditionalProducts:action.payload,
            loading:false

          }

          case 'GET_WEDDING_PRODUCT_ERROR':
          return{
            ...state,
            error:action.payload,
            weddingProducts:[],
            loading:false

          }

          case 'GET_PARTY_PRODUCT_ERROR':
          return{
            ...state,
            error:action.payload,
            partyProducts:[],
            loading:false
          }
          case 'GET_TRADITIONAL_PRODUCT_ERROR':
          return{
            ...state,
            error:action.payload,
            traditionalProducts:[],
            loading:false
          }

          case 'LIKE_PRODUCT_SUCCESS_HOME':
            //Wedding
      const updatedWeddingProducts = state.weddingProducts.map((product) => {
        if (product.data._id === action.payload) {
          // Update the likes information
          product.likes.userLiked = true;
          product.likes.likesCount = product.likes.likesCount+1;
        }
        return product;
      });

          //Party
          const updatedPartyProducts = state.partyProducts.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = true;
              product.likes.likesCount = product.likes.likesCount+1;
            }
            return product;
          });

           //Traditional
           const updatedTraditionalProducts = state.traditionalProducts.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = true;
              product.likes.likesCount = product.likes.likesCount+1;
            }
            return product;
          });

      return {
        ...state,
        weddingProducts: updatedWeddingProducts,
        partyProducts:updatedPartyProducts,
        traditionalProducts:updatedTraditionalProducts,
        loading: false,
      };

      case 'DISLIKE_PRODUCT_SUCCESS_HOME':
            //Wedding
      const updatedDisWeddingProducts = state.weddingProducts.map((product) => {
        if (product.data._id === action.payload) {
          // Update the likes information
          product.likes.userLiked = false;
          product.likes.likesCount = product.likes.likesCount-1;
        }
        return product;
      });

          //Party
          const updatedDisPartyProducts = state.partyProducts.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = false;
              product.likes.likesCount = product.likes.likesCount-1;
            }
            return product;
          });

           //Traditional
           const updatedDisTraditionalProducts = state.traditionalProducts.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = false;
              product.likes.likesCount = product.likes.likesCount-1;
            }
            return product;
          });

      return {
        ...state,
        weddingProducts: updatedDisWeddingProducts,
        partyProducts:updatedDisPartyProducts,
        traditionalProducts:updatedDisTraditionalProducts,
        loading: false,
      };

      default:
        return {
          ...state,
          loading:false
        };
    }
}

export default productReducer;