// Stores.js
import React from "react";
import styles from './AllStores.module.css';
import clothingStore from '../../assets/clothing-shop.png';
import followersIcon from '../../assets/add-user.png';
const Stores = () => {
    return (
        <section>
            <div className={styles.container} style={{ marginBottom: "7%" }}>
                <h2 className={styles.heading}>
                    <span><img src={clothingStore} alt="" style={{ width: "50px", height: "50px", overflow: "auto", marginRight: "20px" }} /></span>
                    STORES YOU MIGHT LOVE
                </h2>
                <div className="row">
                   
                    <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://elle.in/wp-content/uploads/2023/09/BANNER-IMG-29-1.png" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://www.zarla.com/images/zarla-dream-dress-1x1-2400x2400-20210922-3jyfxrgjd4jkyt6bmhwy.png?crop=1:1,smart&width=250&dpr=2" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>    
                             </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://elle.in/wp-content/uploads/2023/09/Payal-Singhal-Dhanmill-Store_New-Delhi-2-scaled.jpg" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://t4.ftcdn.net/jpg/05/07/95/21/360_F_507952111_67OxZSqsFTUPiSkKqb7QkSmdEo5WFght.jpg" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>                           
                            </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11612334395499.jpg" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://img.freepik.com/premium-vector/fashion-logo-creative-women-beauty-life-salon-illustration-vector_669794-218.jpg" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11612334395499.jpg" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://img.freepik.com/premium-vector/fashion-logo-creative-women-beauty-life-salon-illustration-vector_669794-218.jpg" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                       <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11612334395499.jpg" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://img.freepik.com/premium-vector/fashion-logo-creative-women-beauty-life-salon-illustration-vector_669794-218.jpg" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                       <div className={styles.card}>
                        <div className={styles["cover-bg"]}>
                            <img src="https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11612334395499.jpg" alt=""/>
                        </div>
                        <div className={styles["user-info-wrap"]}>
                            <div className={styles["user-photo"]}>
                                <img src="https://img.freepik.com/premium-vector/fashion-logo-creative-women-beauty-life-salon-illustration-vector_669794-218.jpg" alt=""/>
                            </div>
                            <div className={styles["user-info"]}>
                                
                                <div className={styles["user-name"]}>Florina Rothman</div>
                                <div className={styles["user-title"]}>
                                    <h6>Web designer</h6>
                                    <button className="btn btn-sm" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Follow</button>
                                 <button className="btn btn-sm visitBtn" style={{backgroundColor:"#9B5DE5",color:"white"}}>Visit</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["followersAndLoc"]}>
                                <div className={styles["followers"]}>
                                    <img src={followersIcon} alt=""/><span>240 Followers</span>
                                </div>
                                
                            </div>
                        <div className={styles["user-bio"]}>
                            <p>Web enthusiast. Travelaholic. Friendly communicator. Coffee enthusiast. Music geek. Food fan. Gamer.</p>
                            <div className={styles["social"]}>
                                <div className={styles["social-icons"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className={styles["fa-dribbble"]}></i>
                                    </a>
                                </div>
                                <div className={styles["message"]}>
                                    <a href="google.com" className={styles["fa"]}>
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
               
            </div>
        </section>
    );
};

export default Stores;

