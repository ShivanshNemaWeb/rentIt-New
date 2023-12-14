import React from 'react';
import styles from './StoreSettings.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { updateStore } from '../../actions/storeActions';
import { Modal } from '@material-ui/core';
import Loader from '../Loader/Loader';

const StoreSettings = ({storeDetails}) => {
    const dispatch = useDispatch();
    const [storeName,setStoreName] = useState(storeDetails.storeName);
    const [title, setTitle] = useState(storeDetails.title);
    const [country,setCountry] = useState(storeDetails.address.country);
    const [state,setState] = useState(storeDetails.address.state);
    const [city,setCity] = useState(storeDetails.address.city);
    const [postalCode,setPostalCode] = useState(storeDetails.address.postalCode);
    const [street,setStreet] = useState(storeDetails.address.street);
    const [houseNumber,setHouseNumber] = useState(storeDetails.address.houseNumber);
    const [account,setAccount] = useState(storeDetails.accountNumber);
    const[ifsc,setIfsc] = useState(storeDetails.ifsc);
    const [descreption,setDescreption] = useState(storeDetails.descreption);
    const[facebook,setFacebook] = useState(storeDetails.social.facebook);
    const[instagram,setInstagram] = useState(storeDetails.social.instagram);
    const[twitter,setTwitter] = useState(storeDetails.social.twitter);
    const [isSuccess,setIsSuccess] = useState(false);

    const loading = useSelector((state)=>state.store.loading);
    const error = useSelector((state)=> state.store.error);

    const handleUpdate = (e) => {
       e.preventDefault();
       dispatch({type:"REGISTER_REQUST"});
       setTimeout(()=>{
        dispatch(updateStore(storeDetails._id,storeName, title , country, state, city, street, houseNumber, account, ifsc, descreption, facebook, instagram, twitter));
       },1000)
       if(storeDetails!=null){
        setIsSuccess(true);
       }
    }
    
    const handleModalClose = (e) => {
        setIsSuccess(false);
    }
    return (<>
    {
        loading?(<>
        <Modal open={loading}>
            <Loader/>
        </Modal>
        </>):(<></>)
    }
    <div className='container'>
        <div className='row mt-5'>
            <div className='col-md-4'>
                <label for="storeName">Store Name</label>
                <input type="text" name="" value={storeName} className={styles.input} id='storeName' onChange={(e)=>setStoreName(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="title">Title</label>
                <input type="text" name="" value={title} className={styles.input} id='title' onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="country">Country</label>
                <input type="text" name="" value={country} className={styles.input} id='country' onChange={(e)=>setCountry(e.target.value)}/>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-4'>
                <label for="state">State</label>
                <input type="text" name="" value={state} className={styles.input} id='state' onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="City">City</label>
                <input type="text" name="" value={city} className={styles.input} id='City' onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="Street">Street</label>
                <input type="text" name="" value={street} className={styles.input} id='Street' onChange={(e)=>setStreet(e.target.value)}/>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-4'>
                <label for="HouseNumber">House Number</label>
                <input type="text" name="" value={houseNumber} className={styles.input} id='HouseNumber' onChange={(e)=>setHouseNumber(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="Account Number">Bank Account Number</label>
                <input type="text" name="" value={account} className={styles.input} id='Account Number' onChange={(e)=>setAccount(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="IFSC Code">IFSC Code</label>
                <input type="text" name="" value={ifsc} className={styles.input} id='IFSC Code' onChange={(e)=>setIfsc(e.target.value)}/>
            </div>
        </div>

        <div className='row mt-5'>
            <div className='col-md-4'>
                <label for="Facebook">Facebook Link</label>
                <span className='fas fa-link'></span><input type="text" name="" value={facebook} className={styles.input} id='Facebook' onChange={(e)=>setFacebook(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="Instagram">Instagram Link</label>
                <span className='fas fa-link'> </span><input type="text" name="" value={instagram} className={styles.input} id='Instagram' onChange={(e)=>setInstagram(e.target.value)}/>
            </div>
            <div className='col-md-4'>
                <label for="Twitter">Twitter Link</label>
                <span className='fas fa-link'> </span><input type="text" name="" value={twitter} className={styles.input} id='Twitter' onChange={(e)=>setTwitter(e.target.value)}/>
            </div>
        </div>
        
        <div className='row mt-5'>
            <div className='col-md-12'>
                <label for="descreption">Descreption</label>
                <input type="text" name="" value={descreption} className={styles.input} id='descreption' onChange={(e)=>setDescreption(e.target.value)}/>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-12 text-center'>
                <button type="" className='btn' style={{backgroundColor:"rgba(0, 52, 82,1)", color:"white"}} onClick={handleUpdate}>Update</button>
            </div>
            {
                error!==null?(<>
                <p className='text-danger'>{error}</p>
                </>):(<></>)
            }
        </div>
    </div>
    {
    isSuccess?(<>
    <Modal open={isSuccess} onClose={handleModalClose}>
                <div className={styles.notificationModal}>
                     <div className={styles.modalContent}>
                       <h4 className='text-success'>Data Updated Successfully</h4>
                          <button className='btn btn-success' onClick={handleModalClose} style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>Done</button>
                     </div>
                </div>
    </Modal>

    </>):(<></>)
  }
    </>)
}
export default StoreSettings;