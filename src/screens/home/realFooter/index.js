import React from 'react';
import Logos from './social-media-logos.jpg';
import {Link} from 'react-router-dom';

class realFooter extends React.Component{

    render(){
        return(
            <div className='realFooter' >
              <div className='about-us'>
                <span id='about'>About Us</span>
              </div>

              <div className='contactUs'>
                <Link to='/footer'>
                  <span>Contact Us</span>
                </Link>
              </div>

              <div className='followUs'>
                <span>Follow Us</span>
                <img src={Logos} style={{width:'50%', height:35}}/>
              </div>
              
            </div>
        )
    }
}
 export default realFooter;