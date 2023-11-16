import React from 'react';
import styles from './HowItWorks.module.css';
import shopIcon from '../../assets/shop.png';
import returnIcon from '../../assets/return.png';
import packedIcon from '../../assets/packed.png';
import searchIcon from '../../assets/data-searching.png';
import checklistIcon from '../../assets/checklist.png';
import arrowsIcon from '../../assets/arrows.png';
const HowItWorks = () => {


  return (

<>
<div className="container my-5">
    <section id="steps">
        <div className="text-center mb-5">
            <h2 className="font-weight-bold display-4 " style={{color:"#9B5DE5"}}>How It <span style={{color:"rgba(0, 52, 82,1)"}}>Works?</span></h2>
            <span style={{color:"#9B5DE5"}}>If You are a Designer/Provider !</span>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="position-relative px-3 my-5 bg-light" style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={shopIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>Create Your Shop</h4>
                          <ul>
                            <li>Sign up and create an account. And create your store at our plateform.</li>
                            <li>Add shop details,including attractive thumbnails and descriptions.</li>
                            <li>Your shop is featured, and users can follow it for updates.</li>
                          </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bg-light position-relative px-3 my-5 "style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={checklistIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>List Your Designed Dresses</h4>
                        <ul>
                          <li>List multiple dresses for rent, specifying price, size, category, and more.</li>
                          <li>Make your dresses public.</li>
                          <li>Users can rent your dresses; most-liked ones get featured.</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bg-light position-relative px-3 my-5" style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={packedIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>Get Orders</h4>
                        <ul>
                          <li>Receive rental orders from other users.</li>
                          <li>Prepare the rented products. Our team will pick up and deliver the products to renters.</li>
                          <li>Smooth transactions, we handle the logistics.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="steps">
        <div className="text-center mb-5">
            <span style={{color:"#9B5DE5"}} className='font-weight-bol'>If Your Are a Renter  !</span>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="bg-light position-relative px-3 my-5" style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={searchIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>Discover and Rent</h4>
                        <ul>
                          <li>Explore a variety of designs.</li>
                          <li>Like and follow shops for tailored suggestions.</li>
                          <li>Rent your desired dresses hassle-free.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bg-light position-relative px-3 my-5"style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={arrowsIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>Flexible Rentals</h4>
                        <ul>
                          <li>Choose rental duration, price, and size.</li>
                          <li>Enjoy trendy clothing without commitments.</li>
                          <li>Effortless style on your terms.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="bg-light position-relative px-3 my-5" style={{height:"100%"}}>
                    <div className="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                         style={{width: "60px" ,height: "60px",top: "-30px",borderWidth: "4px !important", backgroundColor: "rgba(0, 52, 82,1)"}}>
                        <img src={returnIcon} alt="nothing" style={{height:"30px",width:"30px"}}/>
                    </div>
                    <div className="px-3 text-center pb-3">
                        <h4 style={{color:"#9B5DE5"}}>Return with Ease</h4>
                        <ul>
                          <li>Return rented dresses on time</li>
                          <li>Our team handles pickups and returns.</li>
                          <li>No stress, just great fashion experiences.</li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>

</>
  );
};

export default HowItWorks;
