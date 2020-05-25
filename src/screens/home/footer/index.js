import React from 'react';
import Logo from './652780-double-chevron-right-480.png';
import Calllogo from './images.png';
import Emaillogo from './newsletter-stock-photography-email-icon.jpg';
import Homelogo from './home.png';

class Footer extends React.Component{

    render(){
        return(
            <div className='footer' >
                <div className='nav-menu'>
                  <span>Home <img src={Logo} style={{height:10, width:10}}/> contact Us</span>
                </div>

                <div className='div-title'>
                  <span id='title'>Contact Us</span>
                </div>

                <div className='main-content'>
                  <div className='left-part'>
                    <div className='logo-title'>
                      <img src={Calllogo} style={{height:15, width:20,marginRight:5,}}/>
                      <span>CALL US</span>
                    </div>

                    <div className='phoneNumber'>
                      <span id='pNumber'>1800 200 3000</span>
                      <span>(Mon to Sat 9:30 AM to 6 PM )</span>
                    </div>

                    <div className='email'>
                      <div className='logo-email'>
                        <img src={Emaillogo} style={{height:20, width:20,marginRight:7}}/>
                        <span>E-MAIL</span>
                      </div>
                      <span id='email-id'>support@cardekho.com</span>
                    </div>
                  </div>



                  <div className='right-part'>
                    <div className='right-title'>
                     <span>LET US CONTACT YOU</span>
                    </div>
                    
                    <div className='enter-email'>
                      <input type='text' placeholder='Enter Name'/>
                      <input type='text' placeholder='Enter Email'/>
                    </div>

                    <div className='city'>
                     <input type='text' placeholder='Enter Mobile Number'/>
                     <input type='text' placeholder='Enter City'/>
                    </div>

                    <div className='discription'>
                      <input type='text' placeholder='Please share your feedback what can we improve'/>
                    </div>

                    <div className='choose-file'>
                      <button >Choose File</button>
                      <span>No file chosen Upload.jpg. png files only.</span>
                    </div>

                    <div className='submit'>
                      <div className='checkbox'>
                         <input type='checkbox' />
                         <span>I agree to Terms and Conditions</span>
                      </div>

                      <div className='button'>
                        <button type='submit'>Submit</button>
                      </div>
                    </div>
                  </div>

                </div>
                  
                <div className='cardekho-content'>
                  <div className='topic'>
                     <h2>Business with CarDekho</h2>
                  </div>

                  <div className='three-content'>
                        <div className='left-part'>
                            <div className='first'>
                              <div className='logo-title'>
                                <img src={Calllogo} style={{height:15, width:20,marginRight:5,}}/>
                                <span>CALL US</span>
                              </div>

                              <div className='phoneNumber'>
                                <span id='pNumber'>1800 200 3000</span>
                                <span>(Mon to Sat 9:30 AM to 6 PM )</span>
                              </div>
                            </div>

                            <div className='second'>
                                <div className='logo-email'>
                                <img src={Emaillogo} style={{height:20, width:20,marginRight:7}}/>
                                <span>E-MAIL</span>
                                </div>
                                <span id='email-id'>support@cardekho.com</span>
                            </div>

                            <div className='third'>
                               <div className='dealer-logo'>
                                 <img src={Homelogo} style={{height:20, width:20,marginRight:7}}/>
                                 <span>DEALER SOLUTIONS</span>
                               </div>
                               <span id='dealer'>Dealer Solutions</span>
                            </div>
                        </div>
                  </div>

                  
                </div>
            </div>
        )
    }
}
 export default Footer;