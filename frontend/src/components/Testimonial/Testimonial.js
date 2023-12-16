import React from "react";
import './Testimonial.css';
import {useDispatch,useSelector} from 'react-redux'
import { useEffect,useState } from "react";
import { addTestimonial,getTestimonial } from "../../actions/testimonialActions";
import {useHistory} from 'react-router-dom'
import Loader from '../Loader/Loader';
import { Modal } from '@material-ui/core';
import axios from 'axios';
import config from '../../actions/config.json'; 
import profileImg from '../../assets/profileImg.png'

const baseURL = config.baseURL; 
const Testimonial = ({storeId}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const testimonials = useSelector((state) => state.testimonials.testimonials);
  const [testimonials,setTestimonials] = useState([]);
  const [detail,setDetail] = useState("");
  const [stars,setStars] = useState(0);

  useEffect(() => {
    getTestimonialsFunc();
  },[])

  const getTestimonialsFunc = async() => {
    const response = await axios.get(`${baseURL}/testimonial/getTestimonial/${storeId}`);
    console.log(response);
    if(response.status===200){
      setTestimonials(response.data);
    }
  }

  const handleSubmitTestimonial = (e,storeId) => {
    e.preventDefault();
    dispatch({type:"REGISTER_REQUEST"});
    setTimeout(()=>{
     dispatch(addTestimonial(storeId,stars,detail,history));
    },1000)
  }
    return(    
         <>
       
          <div className="testimonials">
    <div className="testimonial-inner">
      <h3>Testimonial</h3>
      <div className="border"></div>
      
      <div className="row">
        {
          testimonials.map((testimonial)=>{
            return(<>
             <div className="col">
          <div className="testimonial">
            <img src={profileImg} alt=""/>
            <div className="name">{testimonial.user.firstname} {testimonial.user.lastname}</div>
            <div className="stars">
              {
                testimonial.testimonial.stars>=1?(<><i className="fas fa-star"></i></>):(<><i className="fas fa-star" style={{color:"gray"}}></i></>)
              }
              {
                testimonial.testimonial.stars>=2?(<><i className="fas fa-star"></i></>):(<><i className="fas fa-star" style={{color:"gray"}}></i></>)
              }
              {
                testimonial.testimonial.stars>=3?(<><i className="fas fa-star"></i></>):(<><i className="fas fa-star" style={{color:"gray"}}></i></>)
              }
              {
                testimonial.testimonial.stars>=4?(<><i className="fas fa-star"></i></>):(<><i className="fas fa-star" style={{color:"gray"}}></i></>)
              }
              {
                testimonial.testimonial.stars>=5?(<><i className="fas fa-star"></i></>):(<><i className="fas fa-star" style={{color:"gray"}}></i></>)
              }
             
            </div>
            <p><i className="fa fa-quote-left"></i>{testimonial.testimonial.detail}<i className="fa fa-quote-right"></i></p>
          </div>
        </div>
            </>)
          })
        }
        
      </div>
    </div>
    <div className="footer">
        <h4>Write Your Review</h4>
    <div className="stars">
      {stars>=1?(<><i className="fas fa-star" style={{color:"rgba(0, 52, 82,1)"}} onClick={()=>setStars(1)}></i></>):(<><i className="fas fa-star"onClick={()=>setStars(1)}></i></>)}
      {stars>=2?(<><i className="fas fa-star" style={{color:"rgba(0, 52, 82,1)"}} onClick={()=>setStars(2)}></i></>):(<><i className="fas fa-star"onClick={()=>setStars(2)}></i></>)}

      {stars>=3?(<><i className="fas fa-star" style={{color:"rgba(0, 52, 82,1)"}} onClick={()=>setStars(3)}></i></>):(<><i className="fas fa-star"onClick={()=>setStars(3)}></i></>)}
      {stars>=4?(<><i className="fas fa-star" style={{color:"rgba(0, 52, 82,1)"}} onClick={()=>setStars(4)}></i></>):(<><i className="fas fa-star"onClick={()=>setStars(4)}></i></>)}
      {stars>=5?(<><i className="fas fa-star" style={{color:"rgba(0, 52, 82,1)"}} onClick={()=>setStars(5)}></i></>):(<><i className="fas fa-star"onClick={()=>setStars(5)}></i></>)}
            </div>
    <textarea name="" rows="4" cols="120" value={detail} onChange={(e)=>setDetail(e.target.value)}>
    </textarea> 
    <button type="submit" className="btn" style={{backgroundColor:"rgba(0, 52, 82,1)", color:"white",marginTop:"20px"}} onClick={(e)=>handleSubmitTestimonial(e,storeId)}>Submit</button>   
</div>
  </div>
        </>)
        
}
export default Testimonial;