import React, { useState,useEffect } from "react";
import './StoreProfile.css';
import Testimonial from "../Testimonial/Testimonial";
import Navbar from '../Navbar/Navbar';
import {useSelector,useDispatch} from'react-redux';
import { useLocation } from 'react-router-dom';
import { getStoreById } from "../../actions/storeActions";
import { getProducts } from "../../actions/productActions";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import {follow,unfollow} from '../../actions/followActions';

import {
    Modal,
    Button
  } from '@material-ui/core';
  import {addItem} from '../../actions/cartActions'
import { useHistory } from 'react-router-dom';
import {dislike, like} from '../../actions/likeActions'

const StoreProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.product.loading);
  const cartLoading =useSelector((state)=>state.cart.loading);
  const cartError = useSelector((state)=>state.cart.error);
  const [addCartSuccess,setAddCartSuccess] = useState(false);
  const storeDetails = useSelector((state)=> state.store.store);
  console.log(storeDetails); 
 const location = useLocation();
 const { storeId } = location.state;

  const [headTab,setHeadTab] = useState("Work");
  const [tabs,setTabs] = useState("Wedding");
  // const products = useSelector((state)=>state.product.products);
  let weddingProducts = []
  if(storeDetails){
  weddingProducts= storeDetails.products.filter(function(product){
    if(product.data.category==="Wedding"){
      return product;
    }
    else return;
  })
  }
  let partyProducts =[]
  if(storeDetails)
   partyProducts=storeDetails.products.filter(function(product){
    if(product.data.category==="Party"){
      return product;
    }
    else return;
  })

  let traditionalProducts = []
if(storeDetails)
 traditionalProducts= storeDetails.products.filter(function(product){
    if(product.data.category==="Traditional"){
      return product;
    }
    else return;
  })

  useEffect(() => {
    dispatch({type:"REGISTER_REQUEST"});
    setTimeout(()=>{
          dispatch(getStoreById(storeId));
    },1000)
},[dispatch,storeId]);

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

const handleLikeClick = (e,productId) => {
  e.preventDefault();
    // Make API call
    dispatch({type:'LIKE_PRODUCT_SUCCESS_STORE',payload:productId});
    dispatch(like(productId,history));       
}

const handleDislikeClick =  (e,productId) => {
  e.preventDefault();
  dispatch({type:'DISLIKE_PRODUCT_SUCCESS_STORE',payload:productId});
  dispatch(dislike(productId,history));
}

const handleFollowClick = (e,storeId) => {
  e.preventDefault();
    // Make API call
    dispatch({type:'FOLLOW_STORE_SUCCESS',payload:storeId});
    dispatch(follow(storeId,history));       
}

const handleUnfollowClick =  (e,storeId) => {
  e.preventDefault();
  dispatch({type:'UNFOLLOW_STORE_SUCCESS',payload:storeId});
  dispatch(unfollow(storeId,history));
}
    return <>
    <body className="profile-page sidebar-collapse">
  <Navbar/>
  {
    storeDetails!=null?(<>
    {
      loading?(<>
       <Modal open={loading}>
        <Loader/>
    </Modal>
      </>):(<></>)
    }
    {
      addCartSuccess?(<>
      <Modal open={addCartSuccess}>
                <div className='notificationModal'>
                     <div className='modalContent'>
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
    <div className="page-header header-filter" data-parallax="true" style={{backgroundImage:`url(${storeDetails.coverImgUrl})`}}></div>
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src={storeDetails.profileImgUrl}/>
              </div>
              <div className="name">
                <h3 className="title">{storeDetails.storeName}</h3>
                <h6>{storeDetails.title}</h6>
                {storeDetails.social.facebook && (<a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-facebook"></i></a>)}
                {storeDetails.social.instagram && (<a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-instagram"></i></a>)}
                {storeDetails.social.twitter && (<a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-twitter"></i></a>)}
              </div>
            </div>
            <div className="follow">
              {
                storeDetails.isFollowing?(<>
                <button className="btn btn-fab btn-round btn-success" rel="tooltip" title="" data-original-title="Follow this user" style={{color:"white"}} onClick={(e)=>handleUnfollowClick(e,storeDetails._id)}>
              Following<i className="fa fa-check"></i></button>
                </>):(<>
                 <button className="btn btn-fab btn-round" rel="tooltip" title="" data-original-title="Follow this user" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}  onClick={(e)=>handleFollowClick(e,storeDetails._id)}>
              Follow<i className="fa fa-add"></i></button>
                </>)
              }
            
          </div>
          </div>
        </div>
        <div className="description text-center" style={{color:"rgba(0, 52, 82,1)"}}>
          <p>{storeDetails.descreption}</p>
        </div>
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="profile-tabs">
              <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li className="nav-item">
                  <div className={`nav-link ${headTab==="Work"?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>setHeadTab("Work")}>
                    <i className="fas fa-suitcase"></i> Work
                  </div>
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${headTab==="Testimonial"?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>setHeadTab("Testimonial")}>
                    <i className="fa fa-quote-left"></i> Testimonial
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content tab-space">
          <div className="tab-pane work active show" id="work">
            {
              headTab==="Work"?(<>
               <div className="work">  
            <div className="row">
              
              <div className="col-md-7 ml-auto mr-auto ">
                <div className="titles">
                <h4 className={`title ${tabs==="Wedding"?("tabActive"):("")}`} onClick={()=>setTabs("Wedding")}>Wedding</h4>
                <h4 className={`title ${tabs==="Party"?("tabActive"):("")}`} onClick={()=>setTabs("Party")}>Party</h4>
                <h4 className={`title ${tabs==="Traditional"?("tabActive"):("")}`} onClick={()=>setTabs("Traditional")}>Traditional</h4>
                </div>
                
                <div className="row collections">
                 {
                  tabs==="Pined"?(<>
                 
                  </>):(<>
                  {
                    tabs==="Wedding"?(<>
                    {
                      weddingProducts&&(<>
                      {
                        weddingProducts.map((data)=>{
                         return (
                          <div className="col-md-6">
                          <div className="productGrid">
                        <div className="productImage">
                            <a href="google.com">
                                <img className="pic-1" src={data.images.img1} alt=''/>
                            </a>
                            <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                            <ul className="social">
                            <li onClick={(e)=>handleAddCart(e,data.data._id)}><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                            {data.likes.userLiked ? (
                        <>
                          <li onClick={(e) => handleDislikeClick(e,data.data._id)}>
                            <a href="" data-tip="Dislike">
                              <i className="fa fa-heart like" style={{color:"rgba(0, 52, 82,1)"}}></i>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={(e) => handleLikeClick(e,data.data._id)}>
                            <a href="" data-tip="Like">
                              <i className="fa fa-heart dislike"></i>
                            </a>
                          </li>
                        </>
                      )}<Link to={{
                   pathname: '/details',
                   state: {product:{data,store:storeDetails,images:{
                    img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                    img4:data.images.img4,img5:data.images.img5
                   },likes:data.likes}} // Add the data you want to pass
                 }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                 </Link>                            </ul>
                        </div>
                        <div className="productFooter">
                            <div className="productContent">
                            <h3 className="title">{data.data.title}</h3>
                            <div className="price">&#8377; {data.data.price}</div>
                            </div>
                            <div className="productContent">
                            <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                                <img className='circle rounded-circle' src={storeDetails.profileImgUrl} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeDetails.storeName}</h3> 
                                </div></a>
                            </div>
                        </div>
                    </div>
                          </div>
                        )
                        })
                      }
                      </>)
                    }

                    </>):(<>
                    {
                      tabs==="Party"?(<>
                       {
                      partyProducts&&(<>
                      {
                        partyProducts.map((data)=>{
                          return (
                            <div className="col-md-6">
                            <div className="productGrid">
                          <div className="productImage">
                              <a href="google.com">
                                  <img className="pic-1" src={data.images.img1} alt=''/>
                              </a>
                              <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                              <ul className="social">
                              <li onClick={(e)=>handleAddCart(e,data.data._id)}><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                              {data.likes.userLiked ? (
                        <>
                          <li onClick={(e) => handleDislikeClick(e,data.data._id)}>
                            <a href="" data-tip="Dislike">
                              <i className="fa fa-heart like" style={{color:"rgba(0, 52, 82,1)"}}></i>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={(e) => handleLikeClick(e,data.data._id)}>
                            <a href="" data-tip="Like">
                              <i className="fa fa-heart dislike"></i>
                            </a>
                          </li>
                        </>
                      )}  <Link to={{
                     pathname: '/details',
                     state: {product:{data,store:storeDetails,images:{
                      img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                      img4:data.images.img4,img5:data.images.img5
                     }}} // Add the data you want to pass
                   }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                   </Link>                            </ul>
                          </div>
                          <div className="productFooter">
                              <div className="productContent">
                              <h3 className="title">{data.data.title}</h3>
                              <div className="price">&#8377; {data.data.price}</div>
                              </div>
                              <div className="productContent">
                              <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                                  <img className='circle rounded-circle' src={storeDetails.profileImgUrl} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeDetails.storeName}</h3> 
                                  </div></a>
                              </div>
                          </div>
                      </div>
                            </div>
                          )
                        })
                      }
                      </>)
                    }
                      </>):(<>
                      {
                        tabs==="Traditional"?(<>
                         {
                      traditionalProducts&&(<>
                      {
                        traditionalProducts.map((data)=>{
                          return (
                            <div className="col-md-6">
                            <div className="productGrid">
                          <div className="productImage">
                              <a href="google.com">
                                  <img className="pic-1" src={data.images.img1} alt=''/>
                              </a>
                              <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                              <ul className="social">
                              <li onClick={(e)=>handleAddCart(e,data.data._id)}><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                              {data.likes.userLiked ? (
                        <>
                          <li onClick={(e) => handleDislikeClick(e,data.data._id)}>
                            <a href="" data-tip="Dislike">
                              <i className="fa fa-heart like" style={{color:"rgba(0, 52, 82,1)"}}></i>
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li onClick={(e) => handleLikeClick(e,data.data._id)}>
                            <a href="" data-tip="Like">
                              <i className="fa fa-heart dislike"></i>
                            </a>
                          </li>
                        </>
                      )}  <Link to={{
                     pathname: '/details',
                     state: {product:{data,store:storeDetails,images:{
                      img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                      img4:data.images.img4,img5:data.images.img5
                     }}} // Add the data you want to pass
                   }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                   </Link>                            </ul>
                          </div>
                          <div className="productFooter">
                              <div className="productContent">
                              <h3 className="title">{data.data.title}</h3>
                              <div className="price">&#8377; {data.data.price}</div>
                              </div>
                              <div className="productContent">
                              <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                                  <img className='circle rounded-circle' src={storeDetails.profileImgUrl} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeDetails.storeName}</h3> 
                                  </div></a>
                              </div>
                          </div>
                      </div>
                            </div>
                          )
                        })
                      }
                      </>)
                    }
                        </>):(<></>)
                      }
                      </>)
                    }
                    </>)
                  }
                  </>)
                 }
                </div>
              </div>

              <div className="col-md-3 ml-5 stats" style={{marginLeft:"10%"}}>
                <h4 className="title">Stats</h4>
                <ul className="list-unstyled" style={{display:"flex",flexDirection:"column"}}>
                <li><b>
                       {
                       storeDetails.products ? (<>{storeDetails.products.length}</>):(<>0</>)
                       }
                       </b> Products <i className="fa fa-tshirt"></i></li>
                     <li><b>
                       {
                       storeDetails.followersCount ? (<>{storeDetails.followersCount}</>):(<>0</>)
                       }
                       </b> Followers <i className="fa fa-users"></i></li>
                     <li><b>
                       {
                       storeDetails.likes ? (<>{storeDetails.likes}</>):(<>0</>)
                       }
                       </b> Likes <i className="fa fa-heart"></i></li>
                </ul>
                <hr/>
              </div>
              

            </div>
            </div>
              </>):(<>
              <Testimonial/>
              </>)
            }
           
          </div>
         
        </div>
      </div>
    </div>
  </div>
    </>):(<>
    <Loader/>
    </>)
  }
  
 
</body>
    </>
}
export default StoreProfile;