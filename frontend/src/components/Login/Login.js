import React, { useState } from "react";
import './Login.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {login} from '../../actions/loginActions';
import {useHistory} from 'react-router-dom';
import logo from '../../assets/logo.png';
import {Modal} from '@material-ui/core';
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";
const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const error = useSelector((state)=>state.login.error);
    const data =  useSelector((state) => state.login.data);
    const loading = useSelector((state)=>state.login.loading);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch({type:"REGISTER_REQUEST"});

        setTimeout(()=>{
        dispatch(login(email,password,history));
        },1000)
    }
    return(<>
    {
        loading?(<>
        <Modal open={loading}>
            <Loader/>   
    </Modal>
        </>):(<></>)
    }
            <Navbar/>

    <div className="root">
     <div class="wrapper">
        <div class="sct brand"><img src={logo} alt="" style={{width:"200px",height:"70px"}}/></div>
        <div class="sct login">
            <form>
                <h3>Member Login</h3>
                <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div class="forgot-remember">
                    <div class="forgot">
                            <a href="">Forgot Password?</a>
                    </div> 
                </div>
                <input type="submit" name="send" value="Send" onClick={handleLogin} style={{backgroundColor:"rgba(0, 52, 82,1)"}}/>
                <p class="text-center">Don't have an account?<br/><i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
                <div class="social-sign">
                    <Link to='/register'><p className="text-primary" style={{cursor:"pointer"}}>Sign up</p></Link>
                     </div>
                     {
                        error!==null?(<>
                        <p className="text-danger">{error}</p>
                        </>):(<></>)
                     }
            </form>
        </div>
    </div> 
    </div>
    </>)
}
export default Login