import React from "react";
import styles from "./Header.module.css";
import Navbar from '../Navbar/Navbar';
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = localStorage.getItem('userId');

  useEffect(()=>{
     dispatch(fetchUser(userId));
  },[dispatch])

    return (<>
<header>
   <Navbar/>
 <div className={styles.content}>
   
  <h2 className={styles.heading} style={{color:"white"}}>
  The Ultimate Fashion Swap: Rent It or List It
  </h2>
  
  
  <button className={styles.shopNow} >
    {
     user!=null && user.hasStore?(<>
      <Link to='/myStore' style={{color:"white"}}>Visit your store</Link>
      </>):(<>
      <Link to='/createStore' style={{color:"white"}}>Create your Store</Link>
      </>)
    }
  </button>
  <button className={styles.findMore}>
    Shop Now
  </button>
  
</div>

</header>
   </>)
}
export default Header;