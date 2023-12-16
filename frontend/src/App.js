import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductModal from './components/ProductModal/ProductModal';
import AllProducts from './components/AllProducts/AllProducts';
import AllStores from './components/AllStores/AllStores';
import StoreProfile from './components/StoreProfile/StoreProfile';
import CreateStore from './components/CreateStore/CreateStore';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ListProduct from './components/ListProduct/ListProduct';
import MyStore from './components/myStore/MyStore';
import {useEffect } from 'react';
import {useDispatch,useSelector } from 'react-redux';
import {getStore,getAllStores} from './actions/storeActions';
import Cart from './components/Cart/Cart';
import storeReducer from './reducers/storeReducer';
function App() {
  const dispatch = useDispatch();
  // const storeDetails = useSelector((state) => state.store.myStoreDetails);
  const weddingProducts = useSelector((state)=>state.product.weddingProducts);
  const partyProducts = useSelector((state)=>state.product.partyProducts);
  const traditionalProducts = useSelector((state)=>state.product.traditionalProducts);
  const allStores = useSelector((state)=>state.store.allStores);
const storeDetails = useSelector((state)=>state.store.myStoreDetails);

//   useEffect(()=>{
//     console.log("Inside useEffect");
//     dispatch(getStore());
//  },[dispatch])



  return (
    <Router>
    <Switch>
      <Route 
      exact path='/'
      render={(props) => <Home {...props}/>}
      />
      <Route path="/details" component={ProductModal}/>
      <Route
          path="/Featured"
          render={(props) => <AllProducts {...props} title="Featured" />}
        />
      <Route
          path="/Wedding"
          render={(props) => <AllProducts {...props} title="Wedding" products ={weddingProducts}/>}
        />
      <Route
          path="/Party"
          render={(props) => <AllProducts {...props} title="Party" products={partyProducts}/>}
        />
      <Route
          path="/Traditional"
          render={(props) => <AllProducts {...props} title="Traditional" products={traditionalProducts}/>}
        />
      <Route
          path="/YourFollowed"
          render={(props) => <AllProducts {...props} title="YourFollowed" />}
        />
      <Route
          path="/YourFollowed"
          render={(props) => <AllProducts {...props} title="YourFollowed" />}
        />
      <Route
          path="/createStore"
          render={(props) => <CreateStore {...props} />}
        />
       <Route
          path="/Stores"
          render={(props) => <AllStores {...props} stores={allStores}/>}
        />      
        <Route path="/storeProfile" component={StoreProfile}/>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/listProduct' component={ListProduct}/>
      <Route
          path="/myStore"
          render={(props) => <MyStore {...props} storeDetails={storeDetails}/>}
        />
    </Switch>
    <Route path="/cart" component={Cart}/>
  </Router>
  );
}

export default App;
