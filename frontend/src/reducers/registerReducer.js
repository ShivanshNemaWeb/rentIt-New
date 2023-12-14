const initialState ={
    user:null,
    error:null,
    loading:false
}

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
      };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          user:action.payload,
          error: null,
          loading:false
        };
        case 'REGISTER_ERROR':
        return {
            ...state,
            user: null,
            error: action.payload,
            loading:false
        };
  
      default:
        return {
          state,
          loading:false
        };
    }
  };
  
  export default registerReducer;