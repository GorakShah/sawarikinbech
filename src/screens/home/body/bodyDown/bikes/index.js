

import React from 'react';

import A2 from './bikeLogo/bajaj-advenure-250-pulsar.jpg';
import B2 from './bikeLogo/bullet.jpg';
import C2 from './bikeLogo/gsx-rr-2020-ar42_7.gallery_full_top_lg.jpg'
import D2 from './bikeLogo/KTM-250-Duke-MY-2017.jpg';
import E2 from './bikeLogo/KTM-RC390-Official-Pic-India.jpg';
import F2 from './bikeLogo/royal-enfield-bullet-350-front-view.jpg';
import G2 from './bikeLogo/unnamed.jpg';
import H2 from './bikeLogo/yamaha2.jpg';
import I2 from './bikeLogo/yamay3.jpg';




class Bikes extends React.Component{

    render(){
        return(
            <div className='bikes'>
                    <div >
                        <span className='s4'>Bikes</span>
                        <div>
                            <span className='s5'>Latest</span>
                            <span className='s5'>Popular</span>
                            <span className='s5'>Upcoming</span>
                        </div>
                   </div>
              <div className='popular-bikes'>
                <img src={A2} />
                <img src={B2}/>
                <img src={C2}/>
                <img src={D2}/>
                <img src={E2}/>
                <img src={F2}/>
                <img src={G2}/>
                <img src={H2}/>
                <img src={I2}/>
                
              </div>
            </div>
        )
    }
}
 export default Bikes ;