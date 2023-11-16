// import {Modal} from '@material-ui/core';
import styles from './ProductModal.module.css';
import lightSlider from 'lightslider/dist/css/lightslider.min.css';
import $ from 'jquery';
import React, { useEffect, useRef } from 'react';
const ProductModal = ({isModalOpen,setModalOpen}) => {
    
     const handleModalClose = () =>{
        setModalOpen(false);
     }
    return (<>
         
                <div className='container'>
                     <div className={styles.modalContent}>
                       <div className={styles.productDetails}>
                        <div className="container-fluid mt-2 mb-3">
    <div className="row no-gutters">
        <div className="col-md-5 pr-2">
        <div className = {styles["product-imgs"]}>
      <div className = {styles["img-display"]}>
        <div className = {styles["img-showcase"]} >
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = ""/>
          <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = ""/>
        </div>
      </div>
      <div className = {styles["img-select"]}>
        <div className = {styles["img-item"]}>
          <a href="google" data-id = "1">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt = ""/>
          </a>
        </div>
        <div className = {styles["img-item"]}>
          <a href="google" data-id = "2">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt = ""/>
          </a>
        </div>
        <div className = {styles["img-item"]}>
          <a   href="google"data-id = "3">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt = ""/>
          </a>
        </div>
        <div className = {styles["img-item"]}>
          <a href="google" data-id = "4">
            <img src = "https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt = ""/>
          </a>
        </div>
      </div>
    </div>
            <div className={`mt-2 ${styles["card"]}`}>
                <h6>Reviews</h6>
                <div className="d-flex flex-row">
                    <div className={styles["stars"]}> </div> <span className="ml-1 font-weight-bold" > 400 Likes <i className='fa fa-heart' style={{color:"red"}}></i></span>
                </div>
                <hr/>
                <div className={styles["badges"]}> <span className="badge bg-dark ">All (230)</span> <span className="badge bg-dark "> <i className="fa fa-image"></i> 23 </span> <span className="badge bg-dark "> <i className="fa fa-comments-o"></i> 23 </span> <span className="badge bg-warning"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <span className="ml-1">2,123</span> </span> </div>
                <hr/>
                <div className={styles["comment-section"]}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <img src="https://i.imgur.com/o5uMfKo.jpg" className={`rounded-circle ${styles["profile-image"]}`} alt=''/>
                            <div className= {`d-flex flex-column ml-1 ${styles["comment-profile"]}`}>
                                <div className={`${styles["comment-ratings"]}`}> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className={styles["username"]}>Lori Benneth</span>
                            </div>
                        </div>
                        <div className={styles["date"]}> <span className={styles["text-muted"]}>2 May</span> </div>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-row align-items-center">
                            <img src="https://i.imgur.com/o5uMfKo.jpg" className={`rounded-circle ${styles["profile-image"]}`} alt=''/>
                            <div className= {`d-flex flex-column ml-1 ${styles["comment-profile"]}`}>
                                <div className={`${styles["comment-ratings"]}`}> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div> <span className={styles["username"]}>Lori Benneth</span>
                            </div>
                        </div>
                        <div className={styles["date"]}> <span className={styles["text-muted"]}>2 May</span> </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-7">
            <div className={styles["card"]}>
                <div className="d-flex flex-row align-items-center">
                    <div className={styles["p-ratings"]}> <i className='fa fa-heart' style={{color:"red"}}></i> </div> <span className="ml-1"> 400 Likes</span>
                </div>
                <div className={styles["about"]}> <span className="font-weight-bold">Title </span>
                    <h4 className="font-weight-bold">$3,444</h4>
                </div>
                <div className={styles["buttons"]}> <button className={`btn btn-outline-warning btn-long ${styles["cart"]}`}>Add to Cart</button> 
                <button className={`btn btn-warning btn-long ${styles["buy"]}`}>Buy it Now</button> 
                <button className={`btn btn-light${styles["wishlist"]}`}> 
                <i className="fa fa-heart" style={{color:"rgba(0, 52, 82,1)"}}></i> 
                </button> </div>
                <hr/>
                <div className={styles["product-description"]}>
                    <div><span className="font-weight-bold">Color:</span><span> Blue</span></div>
                   
                    <div className="d-flex flex-row align-items-center"> <i className="fa fa-calendar-check-o"></i> <span className="ml-1">Delivery from sweden, 15-45 days</span> </div>
                    <div className="mt-5"> <span className="font-weight-bold"><h4>Description</h4></span>
                        <p>The minimalist collaboration features chairs, 
                            lightening, Shelves, Sofas, Desks and various
                             home accessories, all offering form and function 
                             at the same point.We use high-strength clamps and 
                             joinery techniques specially designed for engineered
                              wood beds. Ergo, no irksome creaks - and you can sleep l
                              ike a baby, well into adulthood!</p>
                        <div className={styles["bullets"]}>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>Best in Quality</span> </div>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>Anti-creak joinery</span> </div>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>Sturdy laminate surfaces</span> </div>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>Relocation friendly design</span> </div>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>High gloss, high style</span> </div>
                            <div className="d-flex align-items-center"> <span className={styles["dot"]}></span> <span className={styles["bullet-text"]}>Easy-access hydraulic storage</span> </div>
                        </div>
                    </div>
                    <div className="mt-5"> <span className="font-weight-bold">Store</span> </div>
                    <div className="d-flex flex-row align-items-center"> 
                    <img src="https://i.imgur.com/N2fYgvD.png" className={`rounded-circle ${styles["store-image"]}`} alt=''/>
                        <div className={`d-flex flex-column ml-1 ${styles["comment-profile"]}`}>
                            <div className={`${styles["comment-ratings"]}`}> </div> <span className="username">Rare Boutique</span> <small className={styles["username"]}>25K Followers</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className= {`${styles["card"]} mt-5 p-3`}> <span>Similar items:</span>
                <div className={`mt-2 d-flex flex-row ${styles["similar-products"]}`}>
                    {/* <div className="card border p-1" style={{width: "9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className={styles["card-img-top"]} alt="..."/>
                        <div className="card-body">
                            <h6 className={styles["card-title"]}>$1,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style={{width: "9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className={styles["card-img-top"]} alt="..."/>
                        <div className="card-body">
                            <h6 className={styles["card-title"]}>$1,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style={{width: "9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className={styles["card-img-top"]} alt="..."/>
                        <div className="card-body">
                            <h6 className={styles["card-title"]}>$1,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style={{width: "9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className={styles["card-img-top"]} alt="..."/>
                        <div className="card-body">
                            <h6 className={styles["card-title"]}>$1,999</h6>
                        </div>
                    </div>
                    <div className="card border p-1" style={{width: "9rem",marginRight: "3px"}}> <img src="https://i.imgur.com/KZpuufK.jpg" className={styles["card-img-top"]} alt="..."/>
                        <div className="card-body">
                            <h6 className={styles["card-title"]}>$1,999</h6>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</div>
                       </div>
                      
                     </div>
                     </div>
                   
                
        </>)
}

export default ProductModal;