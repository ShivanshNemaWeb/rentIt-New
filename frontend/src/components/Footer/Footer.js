import React from "react";
import styles from './Footer.module.css';
import Logo from '../../assets/logo.png'
const Footer = () =>{
    return(<>
    <footer>
  
  <div class={styles.offerInfo}>
    Rent your Fashion Now !!
  </div>  
  
  <div class={styles.footerInfo}>
    
    <div class={styles.container}>
      <img src={Logo} alt="" style={{filter: "brightness(0) invert(0)"}}/>
      
      <h2>The Ultimate Fashion Swap: Rent It or List It</h2>
    </div>
    <div class={styles.container}>
  
      <ul style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <li>Wedding</li>
        <li>Party</li>
        <li>Traditional</li>
        <li>Stores</li>
        <li>About</li>
        <li>Contact Us</li>

      </ul>
    </div>
    
    <div class={styles.container}>
  
      <h5>Subscribe</h5>
      
      <form>
        <input type="text" placeholder="Your email address..." class={styles.name}/>
        <input type="submit" class={styles.submit} value="Subscribe"/>
      </form>
    </div>
    
  </div>
  
  <div class={styles.footerCopyright}>
    
    <div class={styles.copyright}>
      <p>Copyright © 2023 RentIt. Powered by RantIt.</p>
      <p>Made by Shivansh Nema</p> 
      shivanshnema83@gmail.com
    </div>
    
    <div class={styles.social}>
      <i class="fa fa-facebook-f"></i>
      <i class="fa fa-youtube-play"></i>
      <i class="fa fa-twitter"></i>
      <i class="fa fa-instagram"></i>
      <i class="fa fa-google"></i>
    </div>
    
  </div>
  
</footer>
    </>)
}
export default Footer;