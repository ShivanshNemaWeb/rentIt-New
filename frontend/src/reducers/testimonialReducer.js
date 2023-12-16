const initialState ={
    testimonials:[],
    error:null,
    loading:false
}

const testimonialReducer = (state = initialState, action) => {
    switch(action.type){
        case 'REGISTER_REQUEST':
            return {
                ...state,
                loading:true
            }
        case 'ADD_TESTIMONIAL_SUCCESS':
            return{
                 ...state,
                 error:null,
                 loading:false
            }
            case 'ADD_TESTIMONIAL_ERROR':
                return{
                     ...state,
                     testimonials:[],
                     error:action.payload,
                     loading:false
                }
                case 'GET_TESTIMONIAL_SUCCESS':
                    return{
                         ...state,
                         testimonials:action.payload,
                         error:null,
                         loading:false
                    }
                    case 'GET_TESTIMONIAL_ERROR':
                        return{
                             ...state,
                             testimonials:[],
                             error:action.payload,
                             loading:false
                        }
        default :
        return {
            ...state,
            loading:false,
            testimonials:[]
        }
    }
}

export default testimonialReducer