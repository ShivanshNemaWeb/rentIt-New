import React, { useEffect, useState } from "react";
import './MyStore.css';
import Testimonial from "../Testimonial/Testimonial";
import Navbar from '../Navbar/Navbar';
import StoreSettings from '../StoreSettings/StoreSettings'
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../actions/productActions";
import {Modal,Button} from '@material-ui/core';
import Loader from '../Loader/Loader';
import {getStore} from '../../actions/storeActions';
import MyProducts from "../MyProducts/MyProducts";

const MyStore = () => {
  
  const [headTab,setHeadTab] = useState("Work");
  const [tabs,setTabs] = useState("Wedding");
  const [deleteId,setDeleteId] = useState("");
  const [deleteModel,setDeleteModel] = useState(false);
  
  const history = useHistory();
  const dispatch = useDispatch();
  const storeDetails = useSelector((state)=>state.store.myStoreDetails);
  const loading = useSelector((state)=>state.product.loading);
  useEffect(()=>{
    dispatch({type:"REGISTER_REQUEST"});
    setTimeout(()=>{
      dispatch(getStore());
    },1000)
  },[dispatch])

    return <>
     <Navbar className="navbar"/>
    {
      storeDetails!=null?(<>
       <div className="profile-page sidebar-collapse">
      
     <div className="page-header header-filter" data-parallax="true" style={{backgroundImage:`url(${storeDetails.coverImgUrl})`}}>
      <i className="fa fa-cloud-upload-alt fa-5x text-center"></i>
     </div>
     <div className="main main-raised">
       <div className="profile-content">
         <div className="container">
           <div className="row">
             <div className="col-md-12 ml-auto mr-auto">
               <div className="profile">
                 <div className="avatar">
                   <img src={storeDetails.profileImgUrl} alt="Your Logo" className=""/>
                   <div>
                     <i className="fa fa-camera fa-2x"></i>
                   </div>
                 </div>
                 <div className="name">
                   <h3 className="title">{storeDetails.storeName}</h3>
                   <h6>{storeDetails.title}</h6>
                   {
                     storeDetails.social.facebook ?(<>
                     <a href={storeDetails.social.facebook} className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-facebook"></i></a>
                     </>):(<></>)
                   } 
                   {
                     storeDetails.social.instagram ?(<>
                    <a href={storeDetails.social.instagram} className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-instagram"></i></a>  
                     </>):(<></>)
                   }
                   {
                     storeDetails.social.twitter ?(<>
                     <a href={storeDetails.social.twitter} className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                     </>):(<></>)
                   }
                  <div>
                  
                  </div>
                 </div>
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
                   <li className="nav-item">
                     <div className={`nav-link ${headTab==="Settings"?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>setHeadTab("Settings")}>
                       <i className="fa fa-gear"></i> Settings
                     </div>
                   </li>
                   <li className="nav-item">
                     <div className={`nav-link ${headTab===""?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>{
                        history.push({
                         pathname: '/listProduct',
                         state: { data: storeDetails._id }
                       });
                     }}>
                       <i className="fa fa-add"></i> List On Rent
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
                 
                 <MyProducts products={storeDetails.products} profileImg ={storeDetails.profileImgUrl} storeName={storeDetails.storeName} storeDetails={storeDetails}/>
                {/* <MyProducts storeId={storeDetails._id}/> */}
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
                       storeDetails.followers ? (<>{storeDetails.followers}</>):(<>0</>)
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
                 {
                   headTab==="Testimonial"?(<><Testimonial/></>):(<>
                   <StoreSettings storeDetails={storeDetails}/>
                   </>)
                 }
                 </>)
               }
              
             </div>
            
           </div>
         </div>
       </div>
     </div>
    
   </div>
      
      </>):(<>
        <Loader/>
      </>)
    }
    
    </>
}
export default MyStore;