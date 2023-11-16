import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductModal from './components/ProductModal/ProductModal';
import AllProducts from './components/AllProducts/AllProducts';
import AllStores from './components/AllStores/AllStores';
import StoreProfile from './components/StoreProfile/StoreProfile';
import CreateStore from './components/CreateStore/CreateStore';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={ProductModal}/>
      <Route
          path="/Featured"
          render={(props) => <AllProducts {...props} title="Featured" />}
        />
      <Route
          path="/Wedding"
          render={(props) => <AllProducts {...props} title="Wedding" />}
        />
      <Route
          path="/Party"
          render={(props) => <AllProducts {...props} title="Party" />}
        />
      <Route
          path="/Traditional"
          render={(props) => <AllProducts {...props} title="Traditional" />}
        />
      <Route
          path="/YourFollowed"
          render={(props) => <AllProducts {...props} title="YourFollowed" />}
        />
      <Route
          path="/YourFollowed"
          render={(props) => <AllProducts {...props} title="YourFollowed" />}
        />
      <Route path="/Stores" component={AllStores}/>
      <Route path="/storeProfile" component={StoreProfile}/>
      <Route path="/createStore" component={CreateStore}/>
    </Switch>
  </Router>
  );
}

export default App;
