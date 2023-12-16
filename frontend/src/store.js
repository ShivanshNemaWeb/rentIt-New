// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import loginReducer from './reducers/loginReducer';
import registerReducer from './reducers/registerReducer';
import storeReducer from './reducers/storeReducer';
import productReducer from './reducers/productReducer';
import cartReducer from './reducers/cartReducer';
import testimonialReducer from './reducers/testimonialReducer';

const rootReducer = combineReducers({
 user:userReducer,
 login:loginReducer,
 register:registerReducer,
 store:storeReducer,
 product:productReducer,
 testimonials:testimonialReducer,
 cart:cartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
