import React, { useEffect,useState } from 'react';
import styles from './Wedding.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {getWeddingProducts} from '../../../actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
import Loader from '../../Loader/Loader';
import {dislike, like} from '../../../actions/likeActions'
import {
    Modal,
    Button
  } from '@material-ui/core';
  import {addItem} from '../../../actions/cartActions'
import { useHistory } from 'react-router-dom';
const Wedding = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.product.loading);
  const cartError = useSelector((state)=>state.cart.error);
  const [addCartSuccess,setAddCartSuccess] = useState(false);

    const weddingProducts = useSelector((state)=> state.product.weddingProducts);

    useEffect(() => {
        dispatch({type:"REGISTER_REQUEST"});
      setTimeout(()=>{
        dispatch(getWeddingProducts())
    },1000)
    },[dispatch]);

    const handleAddCart = (e,productId) => {
      e.preventDefault();
     dispatch({type:"REGISTER_REQUEST"});

     setTimeout(()=>{
      dispatch(addItem(productId,history)); //add to cart function 
      setAddCartSuccess(true);
     },1000)
    }

   const handleAddCartModalClose = () => {
    setAddCartSuccess(false)
   }
 
   
// Create the likedProducts map

   const handleLikeClick = (e,productId) => {
    e.preventDefault();
      // Make API call
      dispatch({type:'LIKE_PRODUCT_SUCCESS_HOME',payload:productId});
      dispatch(like(productId,history));       
  }
  

  const handleDislikeClick =  (e,productId) => {
    e.preventDefault();
    dispatch({type:'DISLIKE_PRODUCT_SUCCESS_HOME',payload:productId});
    dispatch(dislike(productId,history));
  }
  // ... (existing code)

    return (
     <>
     {
    loading?(<>
    <Modal open={loading}>
        <Loader/>
    </Modal>
    </>):(<>
    {
      addCartSuccess?(<>
      <Modal open={addCartSuccess}>
                <div className={styles.notificationModal}>
                     <div className={styles.modalContent}>
                       {
                        cartError?(<><h4 className='text-danger'>Something Went Wrong ! Try again later</h4></>):(<>
                        <h4 className='text-success'>Added to the cart successfully</h4>
                        </>)
                       }
                       <div style={{display:"flex",padding:"20px"}}>
                       <Button className='btn btn-success' onClick={handleAddCartModalClose} style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Done</Button>
                          <Button className='btn btn-success ' style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Cart</Button>

                       </div>
                         
                     </div>
                </div>
    </Modal>
      </>):(<></>)
    }
        <section>
    
    <div className="container" style={{marginBottom:"7%"}}>
    <h2 className={styles.heading}>Wedding Products</h2>
   <div className="row">
       {
   weddingProducts && weddingProducts.slice(0, 4).map((product)=>{
               return(<>
                 <div className="col-md-3 col-sm-6">
           <div className={styles.productGrid}>
               <div className={styles.productImage}>
                   <a href="google.com">
                       <img className="pic-1" src={product.images.img1} alt=''/>
                   </a>
                   <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> {product.likes.likesCount}</span>
                   <ul className={styles.social}>
                       <li onClick={(e)=>handleAddCart(e,product.data._id)}><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                       {product.likes.userLiked ? (
                        <>
                          <li onClick={(e) => handleDislikeClick(e,product.data._id)}>
                            <a href="" data-tip="Dislike">
                              <i className="fa fa-heart like" style={{color:"rgba(0, 52, 82,1)"}}></i>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={(e) => handleLikeClick(e,product.data._id)}>
                            <a href="" data-tip="Like">
                              <i className="fa fa-heart dislike"></i>
                            </a>
                          </li>
                        </>
                      )}
                       <Link to={{
                   pathname: '/details',
                   state: {product:product} // Add the data you want to pass
                 }}><li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li></Link>                    </ul>
               </div>
               <div className={styles.productFooter}>
                   <div className={styles.productContent}>
                   <h3 className={styles.title}>{product.data.title}</h3>
                   <div className={styles.price}>&#8377; {product.data.price}</div>
                   </div>
                   <Link to={{
                   pathname: '/storeProfile',
                   state: { storeId: product.data.storeId } // Add the data you want to pass
                 }}> <div className={styles.productContent}>
                   <a href="" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                       <img className='circle rounded-circle' src={product.images.storeProfile} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className={styles.storeName}>{product.store.storeName}</h3> 
                       </div>
                   </a>
                   </div></Link>
               </div>
           </div>
       
       </div>
               </>)
           })
       }

   </div>
   <div className={styles.viewMore}>
   <Link to="/Wedding"><h6><a href="">View More</a> <i className='fa fa-arrow-right circle rounded-circle p-1' style={{color:"white", backgroundColor:"rgba(0, 52, 82,1)"}}></i></h6></Link>
   </div>
</div>
</section>
    </>)
   }
     </>
    );
  };
  
  export default Wedding;
  
