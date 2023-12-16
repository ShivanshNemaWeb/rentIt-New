// Stores.js
import React, { useState } from "react";
import styles from './AllStores.module.css';
import clothingStore from '../../assets/clothing-shop.png';
import followersIcon from '../../assets/add-user.png';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import {follow,unfollow} from '../../actions/followActions';
import {useSelector,useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

const Stores = () => {
    const location = useLocation();
    const storesProp = location.state.stores;
    const [stores,setStores] = useState(storesProp);
    const history = useHistory();
    const dispatch = useDispatch();
    const handleFollowClick = (e,storeId) => {
        e.preventDefault();
          // Make API call
          console.log(storeId)
          dispatch(follow(storeId,history)); 
          const updatedStores = stores.map((store)=>{
            if(store.data._id===storeId){
                store.isFollowing=true
                store.followersCount=store.followersCount+1
            }
            return store
          }) 
          setStores(updatedStores);  
      }
      
      const handleUnfollowClick =  (e,storeId) => {
        e.preventDefault();
        dispatch(unfollow(storeId,history));
        const updatedStores = stores.map((store)=>{
            if(store.data._id===storeId){
                store.isFollowing=false
                store.followersCount=store.followersCount-1
            }
            return store
          }) 
          setStores(updatedStores);  
      }
    return (
        <section>
            <Navbar/>
            <div className={styles.container} style={{ marginBottom: "7%" }}>
                <h2 className={styles.heading}>
                    <span><img src={clothingStore} alt="" style={{ width: "50px", height: "50px", overflow: "auto", marginRight: "20px" }} /></span>
                    STORES YOU MIGHT LOVE
                </h2>
                <div className="row">
                {
                    stores && stores.map((store)=>{
                        return   <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src={store.images.storeCover} alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src={store.images.storeProfile} alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                <div className={styles["user-name"]}>{store.data.storeName}</div>
                                <div className={styles["user-title"]}>
                                    <h6>{store.data.title}</h6>
                                    {
                store.isFollowing?(<>
                <button className="btn btn-fab btn-round btn-success" rel="tooltip" title="" data-original-title="Follow this user" style={{color:"white",width:"100px",height:"30px"}} onClick={(e)=>handleUnfollowClick(e,store.data._id)}>
              Following<i className="fa fa-check"></i></button>
                </>):(<>
                 <button className="btn btn-fab btn-round" rel="tooltip" title="" data-original-title="Follow this user" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white",width:"100px",height:"30px"}}  onClick={(e)=>handleFollowClick(e,store.data._id)}>
              Follow<i className="fa fa-add"></i></button>
                </>)
              }                                    <button className="btn visitBtn" style={{backgroundColor:"#9B5DE5",color:"white", width:"80px",height:"30px"}}>

<Link to={{
pathname: '/storeProfile',
state: { storeId: store.data._id } // Add the data you want to pass
}} style={{color:"white"}}>Visit</Link>
</button>                                </div>    
                             </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>{store.followersCount} Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>{store.data.descreption}</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    {
                                        store.data.social.instagram && <a href={store.data.social.instagram} className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    }
                                    
                                    {
                                        store.data.social.facebook && <a href={store.data.social.facebook} className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    }
                                     {
                                        store.data.social.twitter && <a href={store.data.social.twitter} className={styles["fa"]}>
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    }
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href={store.data.email} className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    })
                   }
      
                </div>
               
            </div>
        </section>
    );
};

export default Stores;

