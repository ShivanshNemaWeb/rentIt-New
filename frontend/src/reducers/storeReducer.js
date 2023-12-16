const initialState = {
    data:null,
    error:null,
    myStoreDetails:null,
    allStores:[],
    store:null,
    loading:false
}

const storeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'CREATE_STORE_SUCCESS':
        return {
          ...state,
          data:action.payload,
          error: null,
          loading:false
        };
        case 'CREATE_STORE_ERROR':
        return {
            ...state,
            data: null,
            error: "Something Went Wrong",
            loading:false

        };
        
        case 'UPDATE_STORE_SUCCESS':
          return {
            ...state,
            myStoreDetails:action.payload,
            error:null,
            loading:false

          }
         case 'UPDATE_STORE_ERROR':
         return {
          ...state,
           myStoreDetails:null,
           error:"Something Went Wrong",
           loading:false

         }
        case 'GET_STORE_SUCCESS':
        return {
          ...state,
          myStoreDetails:action.payload,
          error:null,
          loading:false
        }
        case 'GET_STORE_ERROR':
        return {
          ...state,
           myStoreDetails:null,
           error:"Something Went Wrong",
           loading:false

         }
        
         case 'GET_ALL_STORE_SUCCESS':
          return{
            ...state,
            allStores:action.payload,
            error:null,
            loading:false

          }
          case 'GET_ALL_STORE_ERROR':
            return{
              ...state,
              allStores:[],
              error:"Something Went Wrong",
              loading:false

            }
          case 'GET_STORE_BY_ID_SUCCESS':
            return {
              ...state,
             error:null,
             store:action.payload,
             loading:false

            }
            case 'GET_STORE_BY_ID_ERROR':
              return {
                ...state,
               error:"Something Went Wrong",
               store:null,
               loading:false

              }
              case 'LIKE_PRODUCT_SUCCESS_STORE':
                //Wedding
          const updatedProduct = state.store.products.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = true;
              product.likes.likesCount = product.likes.likesCount+1;
            }
            return product;
          });
          const updatedStore= {
            ...state.store,
           products:updatedProduct
          }
          return {
            ...state,
            store:updatedStore,
            loading:false
          }
     
          case 'DISLIKE_PRODUCT_SUCCESS_STORE':
                //Wedding
          const updatedDisProduct = state.store.products.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = false;
              product.likes.likesCount = product.likes.likesCount-1;
            }
            return product;
          });
          const updatedDisStore= {
            ...state.store,
           products:updatedDisProduct
          }
          return {
            ...state,
            store:updatedDisStore,
            loading:false
          }
     
          case 'FOLLOW_STORE_SUCCESS':
            const updatedStoreFollow = {
              ...state.store,
              isFollowing :true,
              followersCount:state.store.followersCount+1
            }
            return {
              ...state,
              store:updatedStoreFollow
            }

            case 'UNFOLLOW_STORE_SUCCESS':
              const updatedStoreUnFollow = {
                ...state.store,
                isFollowing :false,
                followersCount:state.store.followersCount-1
              }
              return {
                ...state,
                store:updatedStoreUnFollow
              }
      default:
        return {
          state,
          loading:false
        };
    }
  };
  
  export default storeReducer;