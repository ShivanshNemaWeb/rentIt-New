const initialState={
    data:null,
    error:null,
    loading:false
}
const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REGISTER_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          data:action.payload,
          error: null,
          loading:false
        };
        case 'LOGIN_ERROR':
        return {
            ...state,
            data: null,
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
  
  export default loginReducer;