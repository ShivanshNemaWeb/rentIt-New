import React, { useEffect, useState } from 'react';
import styles from './ListProduct.module.css';
import { FiUpload } from 'react-icons/fi';
import { createProduct } from '../../actions/productActions';
import {useSelector,useDispatch} from 'react-redux'
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Modal } from '@material-ui/core';
import Loader from '../Loader/Loader';
const ListProduct = () => {
  const location = useLocation();
  
  const storeId = location.state?.data;  
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [color,setColor] = useState("");
  const [size,setSize] = useState("");
  const [descreption,setDescreption] = useState("");
  const [category,setCategory] = useState("");
  
  const [firstImg,setFirstImg] = useState("");
  const [secondImg,setSecondImg] = useState("");
  const [thiredImg,setThiredImg] = useState("");
  const [fourthImg,setFourthImg] = useState("");
  const [fifthImg,setFifthImg] = useState("");

  const [firstImage,setFirstImage] = useState("");
  const [secondImage,setSecondImage] = useState("");
  const [thiredImage,setThiredImage] = useState("");
  const [fourthImage,setFourthImage] = useState("");
  const [fifthImage,setFifthImage] = useState("");

   const dispatch = useDispatch();

   const handleFirstImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFirstImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setFirstImg(file);
    }
  };
  const handleSecondImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSecondImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setSecondImg(file);
    }
  };
  const handleThiredImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setThiredImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setThiredImg(file);
    }
  };
  const handleFourthImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFourthImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setFourthImg(file);
    }

  };
  const handleFifthImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFifthImage(event.target.result);
      };
      reader.readAsDataURL(file);
      setFifthImg(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title: title,
      price: price,
      size:size,
      color:color,
      category:category,
      descreption: descreption,
      // images: Object.values(imageUrls).filter((url) => url !== null),
      img1:firstImg,
      img2:secondImg,
      img3:thiredImg,
      img4:fourthImg,
      img5:fifthImg
    };
    dispatch({type:"REGISTER_REQUEST"});
    setTimeout(()=>{
          dispatch(createProduct(formData,storeId));
    },1000)
    
    // e.target.reset();
   setFirstImage(null);
   setSecondImage(null);
   setThiredImage(null);
   setFourthImage(null);
   setFifthImage(null);
  }

  const error = useSelector((state)=>state.store.error);
  const loading = useSelector ((state)=>state.store.loading);
  return (
    <>
    {
      loading?(<>
      <Modal open ={loading}>
        <Loader/>
      </Modal>
      </>):(<></>)
    }
    <Navbar/>
      <div className={styles.root}>
        <div className='container'>
          <div>
            <h2 className={styles.heading}>List your product</h2>
          </div>
          <div className={styles.main}>
            <div className={styles.photos}>
              <div className={styles.firstCard}>
                <div className={styles.cardImageContainer}>
                  {firstImage?(<><img src={firstImage} alt="firstImg" className={styles.img}/></>):(<></>)}

                  <input
                    type="file"
                    accept="image/*"
                    id="firstImageUpload"
                    name="firstImg"
                    style={{ display: 'none' }}
                    onChange={handleFirstImageChange}
                  />
                  
                  <label htmlFor="firstImageUpload" className={styles.uploadButton}>
                      <FiUpload className={styles.uploadIcon} />
                        <span className={styles.uploadText}>Upload Image</span>
                        </label>
                     
                </div>
              </div>
              {/* ... other cards */}
              <div className={styles.otherCards}>
              <div className={styles.cardImageContainer}>
                {secondImage?(<><img src={secondImage} alt="secondImg" className={styles.img} /></>):(<></>)}
                  <input
                    type="file"
                    accept="image/*"
                    id="secondImageUpload"
                    name="secondImg"
                    style={{ display: 'none' }}
                    onChange={handleSecondImageChange}
                  />
                   <label htmlFor="secondImageUpload" className={styles.uploadButton}>
                      <FiUpload className={styles.uploadIcon} />
                        </label>
              </div>

              <div className={styles.cardImageContainer}>
                {thiredImage?(<><img src={thiredImage} alt="thiredImg" className={styles.img} /></>):(<></>)}
                  <input
                    type="file"
                    accept="image/*"
                    id="thiredImageUpload"
                    name="thiredImg"
                    style={{ display: 'none' }}
                    onChange={handleThiredImageChange}
                  />
                   <label htmlFor="thiredImageUpload" className={styles.uploadButton}>
                      <FiUpload className={styles.uploadIcon} />
                        </label>
              </div>

              <div className={styles.cardImageContainer}>
                {fourthImage?(<><img src={fourthImage} alt="fourth" className={styles.img} /></>):(<></>)}
                  <input
                    type="file"
                    accept="image/*"
                    id="fourthImageUpload"
                    name="fourth"
                    style={{ display: 'none' }}
                    onChange={handleFourthImageChange}
                  />
                   <label htmlFor="fourthImageUpload" className={styles.uploadButton}>
                      <FiUpload className={styles.uploadIcon} />
                        </label>
              </div>

              <div className={styles.cardImageContainer}>
                {fifthImage?(<><img src={fifthImage} alt="fifth" className={styles.img} /></>):(<></>)}
                  <input
                    type="file"
                    accept="image/*"
                    id="fifthImageUpload"
                    name="fifth"
                    style={{ display: 'none' }}
                    onChange={handleFifthImageChange}
                  />
                   <label htmlFor="fifthImageUpload" className={styles.uploadButton}>
                      <FiUpload className={styles.uploadIcon} />
                        </label>
              </div>

                </div>
              
            </div>
            <div className={styles.form}>
              <form
                action="https://fabform.io/f/{insert-fabform-form-id-here}"
                className="border-right pr-5 mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="title"
                      placeholder="Title"
                      value={title}
                      onChange={(e)=>setTitle(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      id="price"
                      placeholder="Price/Day"
                      value={price}
                      onChange={(e)=>setPrice(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="size"
                      id="size"
                      placeholder="Size"
                      value={size}
                      onChange={(e)=>setSize(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="color"
                      id="color"
                      placeholder="Color"
                      value={color}
                      onChange={(e)=>setColor(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row" style={{ marginBottom: '20px' }}>
                  <div className="col-md-12 form-group">
                    <select
                      className="form-control"
                      name="category"
                      id="category"
                      placeholder="Category"
                      // value={category}
                      onChange={(e)=>setCategory(e.target.value)}
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Party">Party</option>
                      <option value="Traditional">Traditional</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      placeholder="Product Description"
                      value={descreption}
                      onChange={(e)=>setDescreption(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-md-12"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: '5px',
                      flexDirection:"column"
                    }}
                  >
                    <button
                      type="submit"
                      value="Send Message"
                      className="btn rounded-0 py-2 px-4"
                      style={{
                        backgroundColor: 'rgba(0, 52, 82,1)',
                        color: 'white',
                      }}
                    >
                      Add
                    </button>
                    <span className="submitting"></span>
                    {error?(<><p className='text-danger'>Something Went Wrong</p></>):(<></>)}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
         
    </>
  );
};

export default ListProduct;
