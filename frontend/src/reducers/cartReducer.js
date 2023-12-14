const initialState = {
items:[],
error:null,
loading:false
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };

      case 'ADD_ITEM_SUCCESS':
        return {
            ...state,
            error:null,
            loading:false
        }
        case 'ADD_ITEM_ERROR':
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        
        case 'DELETE_ITEM_SUCCESS':
            return {
               ...state,
               loading:false,
               error:null,
               items: state.items.filter(function(item){
                if(item.data._id!==action.payload){
                    return item;
                }
                else{
                    return
                }
               })
            }
        case 'DELETE_ITEM_ERROR':
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        
        case 'GET_ITEM_SUCCESS':
            return {
                ...state,
                loading:false,
                error:null,
                items:action.payload
            }
        case 'GET_ITEM_ERROR':
            return {
                ...state,
                loading:false,
                error:action.payload,
                items:[]
            }
            case 'LIKE_PRODUCT_SUCCESS_CART':
                //Wedding
          const updatedItems = state.items.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = true;
              product.likes.likesCount = product.likes.likesCount+1;
            }
            return product;
          });
    
          return {
            ...state,
        items:updatedItems,
        loading:false
          }

          case 'DISLIKE_PRODUCT_SUCCESS_CART':
                //Wedding
          const updatedDisItems = state.items.map((product) => {
            if (product.data._id === action.payload) {
              // Update the likes information
              product.likes.userLiked = false;
              product.likes.likesCount = product.likes.likesCount-1;
            }
            return product;
          });
    
          return {
            ...state,
        items:updatedDisItems,
        loading:false
          }
      default:
        return {
          ...state,
          loading:false
        };
    }
}

export default cartReducer;