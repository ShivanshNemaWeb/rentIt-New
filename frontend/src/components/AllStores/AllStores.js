// Stores.js
import React from "react";
import styles from './AllStores.module.css';
import clothingStore from '../../assets/clothing-shop.png';
import followersIcon from '../../assets/add-user.png';
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
const Stores = ({stores}) => {
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
                                    <button className="btn" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white",width:"80px",height:"30px"}}>Follow</button>
                                    <button className="btn visitBtn" style={{backgroundColor:"#9B5DE5",color:"white", width:"80px",height:"30px"}}>

<Link to={{
pathname: '/storeProfile',
state: { storeId: store.data._id } // Add the data you want to pass
}} style={{color:"white"}}>Visit</Link>
</button>                                </div>    
                             </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>{store.data.followers} Followers</span>
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

