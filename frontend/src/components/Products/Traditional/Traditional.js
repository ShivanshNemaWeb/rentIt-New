import React from 'react';
import styles from './Traditional.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Traditional = () => {
    return (
     <>
     <section>
    
     <div className="container" style={{marginBottom:"7%"}}>
     <h2 className={styles.heading}>Traditional Products</h2>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className="pic-1" src="https://5.imimg.com/data5/YE/TF/BZ/SELLER-22535983/men-s-ethic-wear.jpeg" alt=''/>
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
                        <img className='' src="https://www.crazycloths.com/wp-content/uploads/2022/09/1-40.jpg" alt=''/>
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
                        <img className='' src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23464442/2023/5/29/416b3557-f7c8-4a87-88cb-3ce68a2cd1c01685376333314AMIRASINDIANETHNICWEARMustardYellowEthnicMotifsPrintA-LineMi1.jpg" alt=''/>
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
                        <img className='' src="https://cdn0.weddingwire.in/article/7621/original/1280/jpg/71267-kerala-traditional-dress-wedding-stories-by-hari-powder-pink-silk-saree.jpeg" alt=''/>
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
       <Link to="/Traditional"><h6><a href="google.com">View More</a> <i className='fa fa-arrow-right circle rounded-circle p-1' style={{color:"white", backgroundColor:"rgba(0, 52, 82,1)"}}></i></h6></Link>
    </div>
</div>
</section>
     </>
    );
  };
  
  export default Traditional;
  
