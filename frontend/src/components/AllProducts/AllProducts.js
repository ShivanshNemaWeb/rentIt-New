import React from 'react';
import styles from './AllProducts.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';

const AllProducts = ({title}) => {
    return (
     <>
     <section>
    
     <div className="container" style={{marginBottom:"7%"}}>
     <h2 className={styles.heading}>{title} Products</h2>
    <div className="row">
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className="pic-1" src="https://assets.ajio.com/medias/sys_master/root/20230621/j2ZE/64923a0dd55b7d0c63864a1b/-473Wx593H-463624230-blue-MODEL.jpg" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 6K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
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
                        <img className='' src="https://img1.exportersindia.com/product_images/bc-full/2020/3/6876163/indian-designer-bollywood-dress-1583066372-5320325.jpeg" alt=''/>
                    </a>
                    <span className={styles.productTrendLabel}><i className="fa fa-heart" style={{color:"red"}}></i> 4K</span>
                    <ul className={styles.social}>
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <Link to="/details" className={styles.linkButton}>
                        <li><a data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                  </Link>   
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
                        <img className='' src="https://i.pinimg.com/originals/dd/dc/44/dddc449d0c72ff71c9122e773e9cfa92.jpg" alt=''/>
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
                        <img className='' src="https://anayadesignerstudio.com/wp-content/uploads/2023/01/Indian-Designer-Long-Gown-Design-For-Wedding.jpg" alt=''/>
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

        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://anayadesignerstudio.com/wp-content/uploads/2023/01/Indian-Designer-Long-Gown-Design-For-Wedding.jpg" alt=''/>
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
        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://anayadesignerstudio.com/wp-content/uploads/2023/01/Indian-Designer-Long-Gown-Design-For-Wedding.jpg" alt=''/>
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

        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://anayadesignerstudio.com/wp-content/uploads/2023/01/Indian-Designer-Long-Gown-Design-For-Wedding.jpg" alt=''/>
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

        <div className="col-md-3 col-sm-6">
            <div className={styles.productGrid}>
                <div className={styles.productImage}>
                    <a href="google.com">
                        <img className='' src="https://anayadesignerstudio.com/wp-content/uploads/2023/01/Indian-Designer-Long-Gown-Design-For-Wedding.jpg" alt=''/>
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

</div>
</section>
     </>
    );
  };
  
  export default AllProducts;
  
