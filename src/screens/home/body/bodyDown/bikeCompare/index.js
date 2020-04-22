import React from 'react';
import Corolla from './bullet.jpg';
import Prius from './unnamed.jpg';

class Comparison extends React.Component{

    render(){
        return(
            <div className="compare">
              <span className='title'>Popular Bike Comparisons</span>
                  
              <div className='all-in-one'>
              <div className='whole-content'>
              <div className='two-image'>
                  <img src={Corolla}/>
                  <img src={Prius}/>
              </div>
              <div>
                      <span className='sp33'>Duke 250 </span>
                      <span>Vs</span>
                      <span className='sp33'>Duke 720</span>
                      <div className='price'>
                          <span className='sp44'>$ 6,000</span>
                          <span className='sp45'>$ 6,000</span>
                      </div>
              </div>
          </div>
                    
                    <div className='whole-content'>
                        <div className='two-image'>
                            <img src={Corolla}/>
                            <img src={Prius}/>
                        </div>
                        <div>
                                <span className='sp33'>Honda cvc</span>
                                <span>Vs</span>
                                <span className='sp33'>Honda sign</span>
                                <div className='price'>
                                    <span className='sp44'>$ 4,000</span>
                                    <span className='sp45'>$ 4,000</span>
                                </div>
                        </div>
                    </div>

                    <div className='whole-content'>
                    <div className='two-image'>
                        <img src={Corolla}/>
                        <img src={Prius}/>
                    </div>
                    <div>
                            <span className='sp33'>bajaj tvs </span>
                            <span>Vs</span>
                            <span className='sp33'>Bajaj platun</span>
                            <div className='price'>
                                <span className='sp44'>$ 3,000</span>
                                <span className='sp45'>$ 3,000</span>
                            </div>
                    </div>
                </div>

                <div className='whole-content'>
                <div className='two-image'>
                    <img src={Corolla}/>
                    <img src={Prius}/>
                </div>
                <div>
                        <span className='sp33'>Yamaha gilsar </span>
                        <span>Vs</span>
                        <span className='sp33'>Yamaha X5 </span>
                        <div className='price'>
                            <span className='sp44'>$ 7,000</span>
                            <span className='sp45'>$ 7,000</span>
                        </div>
                </div>
            </div>
              </div>

              
          </div>
        )
    }
}
export default Comparison;