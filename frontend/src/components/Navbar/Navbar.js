import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import Cart from '../Cart/Cart';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = localStorage.getItem('userId');

  useEffect(()=>{
     dispatch(fetchUser(userId));
  },[dispatch])

    return(<>
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
      <Link to="/cart" style={{color:"white"}}><li><i className='fas fa-shopping-cart'></i></li></Link>
      {
        user!=null ?(<>
        {
          user.hasStore?(<>
          <Link to="/myStore"><li style={{color:"white"}}>{user.email}</li></Link>
          </>):(<>
            <li style={{color:"white"}}>{user.email}</li>
          </>)
        }
        
        </>):(<><Link to="/login"><li><i className='fas fa-user-alt text-white'></i></li></Link></>)
      }
    </ul>
    
  </nav>
  
    </>)
}
export default Navbar