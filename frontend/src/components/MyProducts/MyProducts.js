import '../myStore/MyStore.css';
import { deleteProduct, getProducts } from "../../actions/productActions";
import {Modal,Button} from '@material-ui/core';
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { getStore } from '../../actions/storeActions';
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
const MyProducts = ({products,profileImg,storeName,storeDetails}) =>{
    const [tabs,setTabs] = useState("Wedding");
    const [deleteId,setDeleteId] = useState("");
    const [deleteModel,setDeleteModel] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const loading = useSelector((state)=>state.product.loading);
    let weddingData =[];
if(products){
   weddingData = products.filter(function(data){
    if(data.data.category==='Wedding'){
      return data
    }
    else return;
  })
}
  const soldData = [
    
]

 let partyData=[];
 if(products){
  partyData = products.filter(function(data){
    if(data.data.category==='Party'){
      return data
    }
    else return;
  })
 }
   
let traditionalData=[];
if(products){
  traditionalData =products.filter(function(data){
    if(data.data.category==='Traditional'){
      return data
    }
    else return;
  })
}

console.log(weddingData);
const handleDeleteProduct = () =>{
    dispatch(deleteProduct(deleteId));
    setDeleteModel(false);
  }
  const handleDeleteProductOpen = (e,id) => {
   e.preventDefault();
    setDeleteId(id);
    setDeleteModel(true);
  }
  console.log(weddingData);
    return (<>
     {
       deleteModel?(<>
        <Modal open={deleteModel} onClose={handleDeleteProduct}>
                   <div className='notificationModal'>
                        <div className='modalContent'>
                          <h4 className='text-success'>Are You sure you want to delete this product?</h4>
                          <div className="btns">
                          <Button className='btn btn-success' onClick={handleDeleteProduct} style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white",marginRight:"20px"}}>Delete</Button>
                             <Button className='btn btn-success' onClick={()=>setDeleteModel(false)} style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Cancel</Button>
   
                          </div>
                             
                        </div>
                   </div>
       </Modal>
       </>):(<></>)
      }
       <div className="col-md-7 ml-auto mr-auto ">
                   <div className="titles">
                   <h4 className={`title ${tabs==="Wedding"?("tabActive"):("")}`} onClick={()=>setTabs("Wedding")}>Wedding</h4>
                   <h4 className={`title ${tabs==="Party"?("tabActive"):("")}`} onClick={()=>setTabs("Party")}>Party</h4>
                   <h4 className={`title ${tabs==="Traditional"?("tabActive"):("")}`} onClick={()=>setTabs("Traditional")}>Traditional</h4>
                   <h4 className={`title ${tabs==="Sold"?("tabActive"):("")}`} onClick={()=>setTabs("Sold")}>Sold</h4>
   
                   </div>
                  
                      <div className="row collections">
                    {
                     tabs==="Sold"?(<>
                     {
                       soldData.length===0? (<h5 className="text-center">No Product sold Yet !</h5>):(<>
                       {
                         soldData.map((data) => {
                           return(<>
                            <div className="col-md-6">
                     <div className="productGrid">
                   <div className="productImage">
                       <a href="google.com">
                           <img className="pic-1" src={data.img} alt=''/>
                       </a>
                       <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> 6K</span>
                       <ul className="social">
                           <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                           <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                           <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                           <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                       </ul>
                   </div>
                   <div className="productFooter">
                       <div className="productContent">
                       <h3 className="title">Men's Blazer</h3>
                       <div className="price">$21.00</div>
                       </div>
                       <div className="productContent">
                       <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                           <img className='circle rounded-circle' src="https://previews.123rf.com/images/nasiriqbal/nasiriqbal2008/nasiriqbal200800015/153726745-boutique-store-clothing-shop-logo.jpg?fj=1" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">Store Name</h3> 
                           </div></a>
                       </div>
                   </div>
                     </div>
                     </div>
                           </>)
                         })
                       }
                       </>)
                     }
                    
                     </>):(<>
                     {
                       tabs==="Wedding"?(<>
                       {
                         weddingData.map((data)=>{
                           return(<>
                           <div className="col-md-6">
                     <div className="productGrid">
                   <div className="productImage">
                       <a href="google.com">
                           <img className="pic-1" src={data.images.img1} alt=''/>
                       </a>
                       <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                       <ul className="social">
                           <li><a href="google.com" data-tip="Edit"><i className="fa fa-edit"></i></a></li>
                           <li ><a href="" data-tip="Remove" onClick={(e)=>handleDeleteProductOpen(e,data.data._id)}><i className="fa fa-trash-o"></i></a></li>
                           <Link to={{
                   pathname: '/details',
                   state: {product:{data,store:storeDetails,images:{
                    img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                    img4:data.images.img4,img5:data.images.img5
                   },likes:data.likes}} // Add the data you want to pass
                 }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                 </Link>
                       </ul>
                   </div>
                   <div className="productFooter">
                       <div className="productContent">
                       <h3 className="title">{data.data.title}</h3>
                       <div className="price">&#8377; {data.data.price}</div>
                       </div>
                       <div className="productContent">
                       <div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative" style={{cursor:"pointer"}}>
                           <img className='circle rounded-circle' src={profileImg} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeName}</h3> 
                           </div>
                       </div>
                   </div>
                     </div>
                           </div>
                           </>)
                         })
                         
                       }
                        <div className="col-md-6">
                          <Link to={{pathname: '/listProduct',
                         state: { data: storeDetails._id }}}>
                           <div className="addCard">
                             <i className="fa fa-cloud-upload-alt fa-5x"></i>
                             <h6>Add New</h6>
                           </div>
                           </Link>
                         </div>
                        
                       </>):(<>
                       {
                         tabs==="Party"?(<>
                         {
                         partyData.map((data)=>{
                           return(<>
                           <div className="col-md-6">
                     <div className="productGrid">
                   <div className="productImage">
                       <a href="google.com">
                           <img className="pic-1" src={data.images.img1} alt=''/>
                       </a>
                       <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                       <ul className="social">
                       <li><a href="google.com" data-tip="Edit"><i className="fa fa-edit"></i></a></li>
                           <li ><a href="" data-tip="Remove" onClick={(e)=>handleDeleteProductOpen(e,data.data._id)}><i className="fa fa-trash-o"></i></a></li>
                           <Link to={{
                   pathname: '/details',
                   state: {product:{data,store:storeDetails,images:{
                    img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                    img4:data.images.img4,img5:data.images.img5
                   }}} // Add the data you want to pass
                 }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                 </Link>                       </ul>
                   </div>
                   <div className="productFooter">
                       <div className="productContent">
                       <h3 className="title">{data.data.title}</h3>
                       <div className="price">&#8377; {data.data.price}</div>
                       </div>
                       <div className="productContent">
                       <div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative" style={{cursor:"pointer"}}>
                           <img className='circle rounded-circle' src={profileImg} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeName}</h3> 
                           </div>
                       </div>
                   </div>
                     </div>
                           </div>
                           </>)
                         })
                         
                       }
                       <div className="col-md-6">
                       <Link to={{pathname: '/listProduct',
                         state: { data: storeDetails._id }}}>
                           <div className="addCard">
                             <i className="fa fa-cloud-upload-alt fa-5x"></i>
                             <h6>Add New</h6>
                           </div>
                           </Link>
                         </div>
                         </>):(<>
                         {
                           tabs==="Traditional"?(<>
                           {
                         traditionalData.map((data)=>{
                           return(<>
                           <div className="col-md-6">
                     <div className="productGrid">
                   <div className="productImage">
                       <a href="google.com">
                           <img className="pic-1" src={data.images.img1} alt=''/>
                       </a>
                       <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> {data.likes.likesCount}</span>
                       <ul className="social">
                           <li><a href="" data-tip="Edit"><i className="fa fa-edit"></i></a></li>
                           <li><a href="" data-tip="Remove" onClick={(e)=>handleDeleteProductOpen(e,data.data._id)}><i className="fa fa-trash-o"></i></a></li>
                           <Link to={{
                   pathname: '/details',
                   state: {product:{data,store:storeDetails,images:{
                    img1:data.images.img1, img2:data.images.img2,img3:data.images.img3,
                    img4:data.images.img4,img5:data.images.img5
                   }}} // Add the data you want to pass
                 }}> <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                 </Link>                       </ul>
                   </div>
                   <div className="productFooter">
                       <div className="productContent">
                       <h3 className="title">{data.data.title}</h3>
                       <div className="price">&#8377; {data.data.price}</div>
                       </div>
                       <div className="productContent">
                       <div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative" style={{cursor:"pointer"}}>
                           <img className='circle rounded-circle' src={profileImg} alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">{storeName}</h3> 
                           </div>
                       </div>
                   </div>
                     </div>
                           </div>
                           </>)
                         })
                         
                       }
                       <div className="col-md-6">
                       <Link to={{pathname: '/listProduct',
                         state: { data: storeDetails._id }}}>
                           <div className="addCard">
                             <i className="fa fa-cloud-upload-alt fa-5x"></i>
                             <h6>Add New</h6>
                           </div>
                           </Link>
                         </div>
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
    </>)
}
export default MyProducts;