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
    <Link to='/'>
    <img src={logo} className={styles.logo} alt="nothing"/>
    </Link>
    <ul className={styles.menu_bar_side}>
      <li>Wedding</li>
      <li>Party</li>
      <li>Traditional</li>
     <li>Stores</li>
     <li>about</li>
      <li>contact us</li>
    </ul>
    
     <ul className={styles.menu_bar} >
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