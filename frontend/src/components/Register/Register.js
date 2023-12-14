import React, { useState } from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { UseSelector,useDispatch, useSelector } from 'react-redux';
import {register} from '../../actions/registerActions';
import {
  Modal,
  Button
} from '@material-ui/core';
import Loader from '../Loader/Loader';
 const Register =()=>{
  const history = useHistory();
  const dispatch = useDispatch();

  const[firstname,setFirstname] = useState("");
  const[lastname,setLastname] = useState("");
  const[email,setEmail] = useState("");
  const [street,setStreet] = useState("");
  const [state,setState] = useState("");
  const [postalCode,setPostalCode] = useState("");
  const [country,setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [password,setPassword] = useState("");

  const data = useSelector((state)=>state.register.data);
  const error = useSelector ((state)=>state.register.error);
const loading = useSelector((state)=>state.register.loading);

  const handleRegister = (e) => {
   e.preventDefault();
   dispatch({ type: 'REGISTER_REQUEST' });
   setTimeout(()=>{
    dispatch(register(firstname,lastname,email,street,state,postalCode,country,countryCode,phoneNumber,password,history));
   },1000)
  }

    return (<>
    {
      loading?(<>
       <Modal open={loading}>
            <Loader/>   
    </Modal>
      </>):(<></>)
    }
 <div class="container mt-3">
  <form>
    <div class="row jumbotron box8">
      <div class="col-sm-12 mx-t3 mb-4">
        <h2 class="text-center" style={{color:"rgba(0, 52, 82,1)"}}>Register</h2>
      </div>
      <div class="col-sm-6 form-group mb-4">
        <label for="name-f">First Name</label>
        <input type="text" class="form-control" id="name-f" placeholder="Enter your first name." value={firstname} onChange={(e)=>setFirstname(e.target.value)} required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="name-l">Last name</label>
        <input type="text" class="form-control" id="name-l" placeholder="Enter your last name." value={lastname} onChange={(e)=>setLastname(e.target.value)} required/>
      </div>
      <div class="col-sm-6 form-group mb-4">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email." value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="address-1">Street</label>
        <input type="text" class="form-control" id="address-1" placeholder="Locality/House/Street no." value={street} onChange={(e)=>setStreet(e.target.value)} required/>
      </div>
      
      <div class="col-sm-6 form-group mb-4">
        <label for="State">State</label>
        <input type="text" class="form-control" id="State" placeholder="Enter your state name." value={state} onChange={(e)=>setState(e.target.value)} required/>
      </div>
      <div class="col-sm-2 form-group">
        <label for="zip">Postal-Code</label>
        <input type="text" class="form-control" id="zip" placeholder="Postal-Code." value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} required/>
      </div>
      <div class="col-sm-2 form-group">
        <label for="zip">Country</label>
        <input type="text" class="form-control"  id="zip" placeholder="Postal-Code." value={country} onChange={(e)=>setCountry(e.target.value)} required/>
      </div>
    
      <div class="col-sm-2 form-group">
        <label for="zip">Country Code</label>
        <input type="text" class="form-control"  id="zip" placeholder="Country-Code." value={countryCode} onChange={(e)=>setCountryCode(e.target.value)} required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="tel">Phone</label>
        <input type="text" class="form-control" id="tel" placeholder="Enter Your Contact Number." value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} required/>
      </div>
      <div class="col-sm-6 form-group">
        <label for="pass">Password</label>
        <input type="Password"  class="form-control" id="pass" placeholder="Enter your password." value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>

      <div class="col-sm-12 form-group mb-0 bottom">
        <button class="btn float-right" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}} onClick={handleRegister}>Sign Up</button>
        
       <p>Already registered ?<Link to='/login'><span className='text-primary' style={{cursor:"pointer"}}> Log in</span></Link></p>
      </div>
      <p className='text-danger text-center'>{error} !</p>
    </div>
    {
      error!=null?(<>
      </>):(<></>)
    }
  </form>
</div>
    </>)
 }
 export default Register;