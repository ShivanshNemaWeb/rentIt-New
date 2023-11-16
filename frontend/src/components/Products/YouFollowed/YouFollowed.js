import React from 'react';
import styles from './YouFollowed.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Followed = () => {
    return (
     <>
     <section>
    
     <div className="container"style={{marginBottom:"7%"}}>
     <h2 className={styles.heading}>Your Followed</h2>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className="pic-1" src="https://images.meesho.com/images/products/229426526/pn9ex_512.webp" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 6K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="google.com" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className={styles.productFooter}>
                    <div className={styles.productContent}>
                    <h3 className={styles.title}>Men's Blazer</h3>
                    <div className={styles.price}>$21.00</div>
                    </div>
                    <div className={styles.productContent}>
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://previews.123rf.com/images/nasiriqbal/nasiriqbal2008/nasiriqbal200800015/153726745-boutique-store-clothing-shop-logo.jpg?fj=1" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className={styles.storeName}>Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
        
        </div>

        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROAUW68ahc_L2EW0yOXDeJJjLY57dofQ4lIQ&usqp=CAU" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 4K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="google.com" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className={styles.productFooter}>
                    <div className={styles.productContent}>
                    <h3 className={styles.title}>Men's Blazer</h3>
                    <div className={styles.price}>$21.00</div>
                    </div>
                    <div className={styles.productContent}>
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQINjCXL7DFsds-lwfSumu9pmAvCtio8YPQ&usqp=CAU" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className={styles.storeName}>Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
              
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://i.pinimg.com/564x/91/36/f5/9136f54445c11b464acfe68f7bb9872c.jpg" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 2K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="google.com" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className={styles.productFooter}>
                    <div className={styles.productContent}>
                    <h3 className={styles.title}>Men's Blazer</h3>
                    <div className={styles.price}>$21.00</div>
                    </div>
                    <div className={styles.productContent}>
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHFKOyoEwBmWjLINfS7MUmBhaSVqmBqcDhw&usqp=CAU" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className={styles.storeName}>Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
        </div> 
                   
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://cdn0.weddingwire.in/article/9682/original/1280/jpg/42869-cocktail-party-dress-coolbluezphotography-gottapatti1.jpeg" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 1K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="google.com" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className={styles.productFooter}>
                    <div className={styles.productContent}>
                    <h3 className={styles.title}>Men's Blazer</h3>
                    <div className={styles.price}>$21.00</div>
                    </div>
                    <div className={styles.productContent}>
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSFbTjRaNflHYCSMr55a1ngkfPm8vi46dQ6A&usqp=CAU" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className={styles.storeName}>Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={styles.viewMore}>
       <Link to="/YourFollowed"> <h6><a href="google.com">View More</a> <i className='fa fa-arrow-right circle rounded-circle p-1' style={{color:"white", backgroundColor:"rgba(0, 52, 82,1)"}}></i></h6></Link>
    </div>
</div>
</section>
     </>
    );
  };
  
  export default Followed;
  
