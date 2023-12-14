import React, { useState } from 'react';
import {
  Modal,
  Button
} from '@material-ui/core';
import styles from './CreateStore.module.css'
import uploadCover from '../../assets/upload-cover.png';
import uploadLogo from '../../assets/upload-logo.png'
import Navbar from '../Navbar/Navbar';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUser } from '../../actions/userActions';
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { createStore } from '../../actions/storeActions';
import Loader from '../Loader/Loader';

const CreateStore = () => {
  const [storeName,setStoreName] = useState("");
  const [title, setTitle] = useState("");
  const [country,setCountry] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [postalCode,setPostalCode] = useState("");
  const [street,setStreet] = useState("");
  const [houseNumber,setHouseNumber] = useState("");
  const [account,setAccount] = useState("");
  const[ifsc,setIfsc] = useState("");
  const [descreption,setDescreption] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [avatarImage, setAvatarImage] = useState(null);
  const[coverImg,setCoverImg] =useState(null);
  const[profileImg, setProfileImg] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const userId = localStorage.getItem('userId');
  const data = useSelector((state)=> state.store.data);
  const error = useSelector((state)=> state.store.error);
  const loading = useSelector((state)=>state.store.loading);

  const[isSuccess,setIsSuccess] = useState(false);

  useEffect(()=>{
     dispatch({type:"REGISTER_REQUEST"});
     dispatch(fetchUser(userId));
  },[dispatch,userId])

  useEffect(()=>{
     if(user==null){
       history.push('/login');
     }
  },[history,user])
  
  useEffect(()=>{
     if(data!=null){
      setIsSuccess(true);
     }
  },[data,dispatch])
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCoverImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setCoverImg(file);
    }
  };

  const handleAvatarImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatarImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setProfileImg(file);
    }
  };

  const handleCreateStore = (e) => {
    e.preventDefault();
    dispatch({type:"REGISTER_REQUEST"});
    setTimeout(()=>{
    dispatch(createStore(storeName,title,country,city,state,postalCode,street,houseNumber,account,ifsc,descreption,coverImg,profileImg))
    },1000)
  }

  const handleModalClose = () => {
     setIsSuccess(false);
     history.push('/myStore')
  }
  return(<>
  {
    loading?(<>
    <Modal open={loading}>
            <Loader/>   
    </Modal>
    </>):(<></>)
  }
  {
    isSuccess?(<>
    <Modal open={isSuccess} onClose={handleModalClose}>
                <div className={styles.notificationModal}>
                     <div className={styles.modalContent}>
                       <h4 className='text-success'>Store Created Successfully</h4>
                          <Button className='btn btn-success' onClick={handleModalClose} style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Done</Button>
                     </div>
                </div>
    </Modal>

    </>):(<></>)
  }
  <Navbar/>
  <div className={styles.root}>
  <div className={styles.rootInner}>
    
  <div className='container' style={{boxShadow:"0px 3px 10px rgba(0, 0, 0, 0.3)",padding:"30px", backgroundColor:"white", borderRadius:"20px"
}}>
            <div >
                <h2 className={styles.heading}>Create Your Store</h2>
            </div>
    <div className={styles.main}>
      <div className='row'>
        <div className='col-md-12'>
          
       <div>
     
      <div className={styles.cover} onClick={() => document.getElementById('coverInput').click()}>
        {coverImage ? <img src={coverImage} alt="Cover" className={styles.uploadedCover} style={{width:"inherit",height:"inherit",zIndex:"0"}}/> : <img src={uploadCover} alt="Upload Cover" />}
      </div>
      <input
        type="file"
        id="coverInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleCoverImageChange}
      />

      {/* Avatar Image */}
      <div className={styles.avatar} onClick={() => document.getElementById('avatarInput').click()} style={{zIndex:"100"}}>
        {avatarImage ? <img src={avatarImage} alt="Avatar" /> : <img src={uploadLogo} alt="Upload Logo" />}
      </div>
      <input
        type="file"
        id="avatarInput"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleAvatarImageChange}
      />
    </div>
      
        </div>
      </div>
     <div className={styles.form}>
      <div className='row mt-3'>
        <h4>STORE INFO</h4>
        <div className='col-md-6'>
          <input type="text" name="" placeholder='Store Name' className={styles.input} value={storeName} onChange={(e)=>setStoreName(e.target.value)}/>
        </div>
        <div className='col-md-6'>
          <input type="text" name="" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/>
        </div>
      </div>
      <div className='row mt-3'>
        <h4>STORE ADDRESS</h4>
        <div className='col-md-6'>
          <input type="text" name="" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder='Country'/>
        </div>
        <div className='col-md-6'>
          <input type="text" name="" value={state} onChange={(e)=>setState(e.target.value)} placeholder='State'/>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <input type="text" name="" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='City'/>
        </div>
        <div className='col-md-6'>
          <input type="text" name="" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} placeholder='Pin'/>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <input type="text" name="" value={street} onChange={(e)=>setStreet(e.target.value)} placeholder='Street'/>
        </div>
        <div className='col-md-6'>
          <input type="text" name="" value={houseNumber} onChange={(e)=>setHouseNumber(e.target.value)} placeholder='House Number'/>
        </div>
      </div>
      <div className='row mt-3'>
        <h4>Bank Account</h4>
        <div className='col-md-6'>
          <input type="text" name="" value={account} onChange={(e)=>setAccount(e.target.value)}  placeholder='Account Number'/>
        </div>
        <div className='col-md-6'>
          <input type="text" name="" value={ifsc} onChange={(e)=>setIfsc(e.target.value)}  placeholder='IFSC'/>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-12'>
          <h4>Descreption</h4>
          <textarea rows="5" cols="130" value={descreption} onChange={(e)=>setDescreption(e.target.value)} placeholder='Write a short descreption about your store...'></textarea>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button type="" className='btn' style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}} onClick={handleCreateStore}>Create</button>
      </div>
      </div>
    </div>
    <div className='text-center message'>
        {
          error!=null?(<>
          <p className='text-center text-danger'>{error}</p>
          </>):(<></>)
        }     
        {
          data!=null?(<>
          <p className='text-center text-success'>{data}</p>
          </>):(<></>)
        }
    </div>
  </div>
  </div>
  </div>

  </>)
}
export default CreateStore;