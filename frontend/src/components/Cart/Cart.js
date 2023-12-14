import React, { useEffect,useState } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import './Cart.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {getItems,deleteItem} from '../../actions/cartActions';
import { Modal } from 'react-bootstrap';
import Loader from '../Loader/Loader';
import { useHistory } from 'react-router-dom';
import {dislike, like} from '../../actions/likeActions'

const Cart = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector((state)=> state.cart.items);
    const loading = useSelector((state)=> state.cart.loading);
    const [daysQuantity, setDaysQuantity] = useState({});
    const [productsPrice,setProductsPrice] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);
    const shipping=200;
    useEffect(()=>{
       dispatch({type:"REGISTER_REQUEST"});
        setTimeout(()=>{
            dispatch(getItems(history));
        },1000)
       
    },[dispatch,history])

    useEffect(()=>{
      let productsP=0;
      if(items)
      for(let i=0;i<items.length;i++){
        productsP+=items[i].data.price;
      }
      setProductsPrice(productsP);
    },[items])
    
    useEffect(()=>{
      setTotalPrice(productsPrice+shipping);
    },[productsPrice])
    const handleDeletItem = (e,productId) =>{
        e.preventDefault();
       dispatch({type:"REGISTER_REQUEST"});
       setTimeout(()=>{
          dispatch(deleteItem(productId,history));
       },1000)
    }

    const handleLikeClick = (e,productId) => {
      e.preventDefault();
        // Make API call
        dispatch({type:'LIKE_PRODUCT_SUCCESS_CART',payload:productId});
        dispatch(like(productId,history));       
    }
    
  
    const handleDislikeClick =  (e,productId) => {
      e.preventDefault();
      dispatch({type:'DISLIKE_PRODUCT_SUCCESS_CART',payload:productId});
      dispatch(dislike(productId,history));
    }
     const handleDecreaseDays = (productId,price) => {
    setDaysQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 1) - 1,
    }));
    setProductsPrice((prevPrice) => Math.max(0, prevPrice - price));
  };

  const handleIncreaseDays = (productId,price) => {
    setDaysQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: (prevQuantity[productId] || 0) + 1,
    }));
    setProductsPrice((prevPrice) => prevPrice + price);
  };
  return (
    <>
    {
        loading?(<>
        <Modal open={loading}>
          <Loader/>
        </Modal>
        </>):(<></>)
    }
    
    <Navbar/>
    <h2 className="text-center heading">Shopping Cart</h2>
    <div className='container' style={{
        display :"flex",
        justifyContent:"center",
        // alignItems:"center",
        flexDirection:"row"
    }}>
      <div className="" 
      style={{width:"60%",margin:"2%"}}
      >
        <div className="card">
          <h4>Cart ({items.length} items)</h4>
         {
            !loading && items ? (<>
               {
                items.map((item)=>{
                    return (
                        <>
                        <div className="store-item mt-2">
            <Row>
              <Col lg={3}>
                <div className="productGrid" style={{width:"150px",height:"200px"}}>
                <div className="productImage" style={{height:"100%"}}>
                    <a href="google.com">
                        <img className="pic-1" src={item.images.img1} alt='' style={{objectFit:"cover",height:"100%",width:"100%"}}/>
                    </a>
                    <ul className='social'>
                    {item.likes.userLiked ? (
                        <>
                          <li onClick={(e) => handleDislikeClick(e,item.data._id)}>
                            <a href="" data-tip="Dislike">
                              <i className="fa fa-heart like" style={{color:"rgba(0, 52, 82,1)"}}></i>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={(e) => handleLikeClick(e,item.data._id)}>
                            <a href="" data-tip="Like">
                              <i className="fa fa-heart dislike"></i>
                            </a>
                          </li>
                        </>
                      )}                        <Link to={{
                   pathname: '/details',
                   state:{product:item}   // Add the data you want to pass
                 }}><li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li></Link>                    </ul>
                </div>
                
            </div>
              </Col>
              <Col lg={9}>
                <div className="mt-3 mt-lg-0 d-flex align-items-center justify-content-between">
                  <h4>{item.data.title}</h4>
                  <div>
                    <p className='font-weight-bold'>Days</p>
                    <div className="btn-quantity-container d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                      <Button className="btn-quantity" style={{backgroundColor:"rgba(0, 52, 82,1)"}} onClick={() =>
                                      handleDecreaseDays(item.data._id,item.data.price)
                                    }>-</Button>
                      <span className="p-quantiry">{daysQuantity[item.data._id] || 1}</span>
                      <Button className="btn-quantity" style={{backgroundColor:"rgba(0, 52, 82,1)"}} onClick={() =>
                                      handleIncreaseDays(item.data._id,item.data.price)
                                    }>+</Button>
                    </div>
                  </div>
                </div>
                <div className="list-store d-flex align-items-center justify-content-between">
                  <p><i className='fa fa-heart text-danger'></i> {item.likes.likesCount}</p>
                  
                </div>
                <div className="list-store d-flex align-items-center justify-content-between">
                  <p>Color : {item.data.color}</p>
                </div>
                <div className="list-store d-flex align-items-center justify-content-between">
                  <p>Size : {item.data.size}</p>
                </div>
                <div className="list-store d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-2">
                    <Button className="btn-list" bsSize="xsmall" style={{backgroundColor:"rgba(0, 52, 82,1)"}} onClick={(e)=>handleDeletItem(e,item.data._id)}>
                      <i className="fa fa-trash"></i>
                      <span> Remove Item</span>
                    </Button>
                   
                  </div>
                  <div className="d-flex">
                    <h5>&#8377; {item.data.price}</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
                        </>
                    )
                })
               }
            </>):(<>
            <Modal open={loading}>
                <Loader/>
            </Modal>
            </>)
         }
        </div>
      </div>
      <div className="mt-5" 
      style={{width:"40%"}}>
        <div className="card checkout">
          <h4>The total amount of</h4>
          <div className="">
            <Row>
             <div className='price'>
              <p>Shipping</p>
              <p>&#8377; {shipping}</p>
             </div>
             <div className='price'>
              <p>Products</p>
              <p>&#8377; {productsPrice}</p>
             </div>            
             </Row>
             <hr/>
            <Row className="mt-2">
            <div className='price'>
              <h5 className='font-weight-bold'>Total</h5>
              <p className='font-weight-bold'>&#8377; {totalPrice}</p>
             </div>
            </Row>
           <Row className='mt-2'>
             <Button style={{backgroundColor:"rgba(0, 52, 82,1)"}}>Checkout</Button>
           </Row>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
