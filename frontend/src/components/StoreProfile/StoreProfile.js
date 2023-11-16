import React, { useState } from "react";
import './StoreProfile.css';
import Testimonial from "../Testimonial/Testimonial";
const StoreProfile = () => {
  const [headTab,setHeadTab] = useState("Work");
  const [tabs,setTabs] = useState("Pined");
    return <>
    <body className="profile-page sidebar-collapse">
  
  <div className="page-header header-filter" data-parallax="true" style={{backgroundImage:"url('https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11612334395499.jpg')"}}></div>
  <div className="main main-raised">
    <div className="profile-content">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="profile">
              <div className="avatar">
                <img src="https://www.livelingua.com/img/profilesTeachers/103/Guillaume-Deneufbourg-Square_Profile_S.jpg" alt="" className="img-raised rounded-circle img-fluid"/>
              </div>
              <div className="name">
                <h3 className="title">Christian Louboutin</h3>
                <h6>Designer</h6>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble"><i className="fa fa-facebook"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter"></i></a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest"><i className="fa fa-instagram"></i></a>
              </div>
            </div>
            <div className="follow">
            <button className="btn btn-fab btn-round" rel="tooltip" title="" data-original-title="Follow this user" style={{backgroundColor:"rgba(0, 52, 82,1)",color:"white"}}>
              <i className="material-icons">add</i></button>
          </div>
          </div>
        </div>
        <div className="description text-center" style={{color:"rgba(0, 52, 82,1)"}}>
          <p>An artist of considerable range, Chet Faker &#x2014; the name taken by Melbourne-raised, Brooklyn-based Nick Murphy &#x2014; writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>
        </div>
        <div className="row">
          <div className="col-md-12 ml-auto mr-auto">
            <div className="profile-tabs">
              <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                <li className="nav-item">
                  <div className={`nav-link ${headTab==="Work"?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>setHeadTab("Work")}>
                    <i className="material-icons">work</i> Work
                  </div>
                </li>
                <li className="nav-item">
                  <div className={`nav-link ${headTab==="Testimonial"?("active"):("")}`} href="" role="tab" data-toggle="tab" onClick={()=>setHeadTab("Testimonial")}>
                    <i className="fa fa-quote-left"></i> Testimonial
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content tab-space">
          <div className="tab-pane work active show" id="work">
            {
              headTab==="Work"?(<>
               <div className="work">  
            <div className="row">
              
              <div className="col-md-7 ml-auto mr-auto ">
                <div className="titles">
                <h4 className={`title ${tabs==="Pined"?("tabActive"):("")}`} onClick={()=>setTabs("Pined")}>Pined</h4>
                <h4 className={`title ${tabs==="Wedding"?("tabActive"):("")}`} onClick={()=>setTabs("Wedding")}>Wedding</h4>
                <h4 className={`title ${tabs==="Party"?("tabActive"):("")}`} onClick={()=>setTabs("Party")}>Party</h4>
                <h4 className={`title ${tabs==="Traditional"?("tabActive"):("")}`} onClick={()=>setTabs("Traditional")}>Traditional</h4>
                </div>
                
                <div className="row collections">
                 {
                  tabs==="Pined"?(<>
                  <div className="col-md-6">
                  <div className="productGrid">
                <div className="productImage">
                    <a href="google.com">
                        <img className="pic-1" src="https://assets.ajio.com/medias/sys_master/root/20230621/j2ZE/64923a0dd55b7d0c63864a1b/-473Wx593H-463624230-blue-MODEL.jpg" alt=''/>
                    </a>
                    <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> 6K</span>
                    <ul className="social">
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className="productFooter">
                    <div className="productContent">
                    <h3 className="title">Men's Blazer</h3>
                    <div className="price">$21.00</div>
                    </div>
                    <div className="productContent">
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://previews.123rf.com/images/nasiriqbal/nasiriqbal2008/nasiriqbal200800015/153726745-boutique-store-clothing-shop-logo.jpg?fj=1" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
                  </div>

                  <div className="col-md-6">
                  <div className="productGrid">
                <div className="productImage">
                    <a href="google.com">
                        <img className="pic-1" src="https://assets.ajio.com/medias/sys_master/root/20230621/j2ZE/64923a0dd55b7d0c63864a1b/-473Wx593H-463624230-blue-MODEL.jpg" alt=''/>
                    </a>
                    <span className="productTrendLabel"><i className="fa fa-heart" style={{color:"red"}}></i> 6K</span>
                    <ul className="social">
                        <li><a href="google.com" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                        <li><a href="google.com" data-tip="Like"><i className="fa fa-heart"></i></a></li>
                        <li><a href="google.com" data-tip="Compare"><i className="fa fa-random"></i></a></li>
                        <li><a href="/details" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
                <div className="productFooter">
                    <div className="productContent">
                    <h3 className="title">Men's Blazer</h3>
                    <div className="price">$21.00</div>
                    </div>
                    <div className="productContent">
                    <a href="google.com" style={{textDecoration:"none"}}><div className="circle rounded-circle d-flex align-items-center justify-content-center position-relative">
                        <img className='circle rounded-circle' src="https://previews.123rf.com/images/nasiriqbal/nasiriqbal2008/nasiriqbal200800015/153726745-boutique-store-clothing-shop-logo.jpg?fj=1" alt="" style={{height:"35px", width:"35px", marginRight:"5px"}}/><h3 className="storeName">Store Name</h3> 
                        </div></a>
                    </div>
                </div>
            </div>
                  </div>
                  </>):(<>
                  {
                    tabs==="Wedding"?(<>
                    <div className="col-md-6">
                      Wedding
                    </div>
                    </>):(<>
                    {
                      tabs==="Party"?(<>
                      Party
                      </>):(<>
                      {
                        tabs==="Traditional"?(<>
                        Traditional
                        </>):(<></>)
                      }
                      </>)
                    }
                    </>)
                  }
                  </>)
                 }
                </div>
              </div>

              <div className="col-md-3 ml-5 stats" style={{marginLeft:"10%"}}>
                <h4 className="title">Stats</h4>
                <ul className="list-unstyled" style={{display:"flex",flexDirection:"column"}}>
                  <li><b>60</b> Products <i className="fas fa-tshirt"></i></li>
                  <li><b>4</b> Followers <i className="fa fa-users"></i></li>
                  <li><b>1.2K</b> Likes <i className="fa fa-heart"></i></li>
                </ul>
                <hr/>
                <h4 className="title">About his Work</h4>
                <p className="description">French luxury footwear and fashion. The footwear has incorporated shiny, red-lacquered soles that have become his signature.</p>
                <hr/>
                <h4 className="title">Focus</h4>
                <span className="badge badge-primary">Footwear</span>
                <span className="badge badge-rose">Luxury</span>
              </div>
              

            </div>
            </div>
              </>):(<>
              <Testimonial/>
              </>)
            }
           
          </div>
         
        </div>
      </div>
    </div>
  </div>
 
</body>
    </>
}
export default StoreProfile;