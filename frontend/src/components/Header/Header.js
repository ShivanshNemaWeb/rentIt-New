import React from "react";
import styles from "./Header.module.css";
import logo from '../../assets/logo.png';

const Header = () => {
    return (<>
<header>
  
  <nav>
    
    <img src={logo} className={styles.logo} alt="nothing"/>
    
    <ul className={styles.menu_bar_side}>
      <li>Featured</li>
      <li>Wedding</li>
      <li>Party</li>
      <li>Your Followed</li>
      <li>Traditional</li>
      <li>Stores</li>
    </ul>
    
     <ul className={styles.menu_bar}>
      <li>about</li>
      <li>contect us</li>
      <li><i className='fas fa-bell'></i></li>
      <li><i className='fas fa-shopping-cart'></i></li>
      <li><i className='fas fa-user-alt'></i></li>
    </ul>
    
    {/* <i className="fa fa-bars"></i> */}
  </nav>

  
 <div className={styles.content}>
   
  <h2 className={styles.heading}>
  The Ultimate Fashion Swap: Rent It or List It
  </h2>
  
  <h4>
    25% Off On All Products
  </h4>
  
  <button className={styles.shopNow}>
    Create Your Store
  </button>
  <button className={styles.findMore}>
    Shop Now
  </button>
  
</div>

</header>
   </>)
}
export default Header;