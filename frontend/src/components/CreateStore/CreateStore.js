import React, { useState } from 'react';
import './CreateStore.css';

const YourComponent = () => {
  const [current, setCurrent] = useState(1);

  const setProgressBar = (curStep) => {
    const percent = parseFloat((100 / steps) * curStep).toFixed();
    document.querySelector(".progress-bar").style.width = percent + "%";
  };

  const handleNext = () => {
    setProgressBar(current + 1);
    setCurrent(current + 1);
  };

  const handlePrevious = () => {
    setProgressBar(current - 1);
    setCurrent(current - 1);
  };

  const steps = document.querySelectorAll("fieldset").length;

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
          <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sign Up Your User Account</h2>
            <p>Fill all form fields to go to the next step</p>
            <form id="msform">
              <ul id="progressbar">
                <li className="active" id="account"><strong>Account</strong></li>
                <li id="personal"><strong>Personal</strong></li>
                <li id="payment"><strong>Image</strong></li>
                <li id="confirm"><strong>Finish</strong></li>
              </ul>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
              </div> <br />
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title">Account Information:</h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 1 - 4</h2>
                    </div>
                  </div>
                  <label className="fieldlabels">Email: *</label> <input type="email" name="email" placeholder="Email Id" /> <label className="fieldlabels">Username: *</label> <input type="text" name="uname" placeholder="UserName" /> <label className="fieldlabels">Password: *</label> <input type="password" name="pwd" placeholder="Password" /> <label className="fieldlabels">Confirm Password: *</label> <input type="password" name="cpwd" placeholder="Confirm Password" />
                </div> <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext}/>
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title">Personal Information:</h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 2 - 4</h2>
                    </div>
                  </div> <label className="fieldlabels">First Name: *</label> <input type="text" name="fname" placeholder="First Name" /> <label className="fieldlabels">Last Name: *</label> <input type="text" name="lname" placeholder="Last Name" /> <label className="fieldlabels">Contact No.: *</label> <input type="text" name="phno" placeholder="Contact No." /> <label className="fieldlabels">Alternate Contact No.: *</label> <input type="text" name="phno_2" placeholder="Alternate Contact No." />
                </div> <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext}/> <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={handlePrevious}/>
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title">Image Upload:</h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 3 - 4</h2>
                    </div>
                  </div> <label className="fieldlabels">Upload Your Photo:</label> <input type="file" name="pic" accept="image/*" /> <label className="fieldlabels">Upload Signature Photo:</label> <input type="file" name="pic" accept="image/*" />
                </div> <input type="button" name="next" className="next action-button" value="Submit" onClick={handleNext}/> <input type="button" name="previous" className="previous action-button-previous" value="Previous" onClick={handlePrevious}/>
              </fieldset>
              <fieldset>
                <div className="form-card">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="fs-title">Finish:</h2>
                    </div>
                    <div className="col-5">
                      <h2 className="steps">Step 4 - 4</h2>
                    </div>
                  </div> <br /><br />
                  <h2 className="purple-text text-center"><strong>SUCCESS !</strong></h2> <br />
                  <div className="row justify-content-center">
                    <div className="col-3"> <img src="https://i.imgur.com/GwStPmg.png" className="fit-image" alt="Success" /> </div>
                  </div> <br /><br />
                  <div className="row justify-content-center">
                    <div className="col-7 text-center">
                      <h5 className="purple-text text-center">You Have Successfully Signed Up</h5>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;