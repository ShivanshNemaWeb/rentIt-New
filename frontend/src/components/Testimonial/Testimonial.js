import React from "react";
import './Testimonial.css';

const Testimonial = () => {
    return(    
         <>
            <div className="testimonials">
    <div className="testimonial-inner">
      <h3>Testimonial</h3>
      <div className="border"></div>
      
      <div className="row">
        <div className="col">
          <div className="testimonial">
            <img src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="name">John Waddrob</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate! <i className="fa fa-quote-right"></i></p>
          </div>
        </div>
        
        <div className="col">
          <div className="testimonial">
            <img src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="name">John Waddrob</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate! <i className="fa fa-quote-right"></i></p>
          </div>
        </div>
        
        <div className="col">
          <div className="testimonial">
            <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <div className="name">John Waddrob</div>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p><i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque repellat aspernatur temporibus assumenda sint odio minima. Voluptate alias possimus aspernatur voluptates excepturi placeat iusto cupiditate! <i className="fa fa-quote-right"></i></p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer">
        <h4>Write Your Review</h4>
    <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
    <textarea name="" rows="4" cols="120">
    </textarea> 
    <button type="" className="btn" style={{backgroundColor:"rgba(0, 52, 82,1)", color:"white"}}>Submit</button>   
</div>
  </div>
        </>
    )
}
export default Testimonial;