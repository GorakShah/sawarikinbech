import React from 'react';
import Corolla from './corolla.jpg';
import Prius from './toyata-prius.jpg';

class Comparison extends React.Component{

    render(){
        return(
            <div className="compare">
              <span className='title'>Popular Car Comparisons</span>
                  
              <div className='all-in-one'>
              <div className='whole-content'>
              <div className='two-image'>
                  <img src={Corolla}/>
                  <img src={Prius}/>
              </div>
              <div>
                      <span className='sp33'>Toyota corolla </span>
                      <span>Vs</span>
                      <span className='sp33'>Toyota prius</span>
                      <div className='price'>
                          <span className='sp44'>$ 21,000</span>
                          <span className='sp45'>$ 21,000</span>
                      </div>
              </div>
          </div>
                    
                    <div className='whole-content'>
                        <div className='two-image'>
                            <img src={Corolla}/>
                            <img src={Prius}/>
                        </div>
                        <div>
                                <span className='sp33'>Nissan Altima</span>
                                <span>Vs</span>
                                <span className='sp33'>Nissan Versa</span>
                                <div className='price'>
                                    <span className='sp44'>$ 19,000</span>
                                    <span className='sp45'>$ 19,000</span>
                                </div>
                        </div>
                    </div>

                    <div className='whole-content'>
                    <div className='two-image'>
                        <img src={Corolla}/>
                        <img src={Prius}/>
                    </div>
                    <div>
                            <span className='sp33'>Honda Civic </span>
                            <span>Vs</span>
                            <span className='sp33'>Honda Accord</span>
                            <div className='price'>
                                <span className='sp44'>$ 17,000</span>
                                <span className='sp45'>$ 17,000</span>
                            </div>
                    </div>
                </div>

                <div className='whole-content'>
                <div className='two-image'>
                    <img src={Corolla}/>
                    <img src={Prius}/>
                </div>
                <div>
                        <span className='sp33'>Maruti Xl5 </span>
                        <span>Vs</span>
                        <span className='sp33'>Maruti X-Presso</span>
                        <div className='price'>
                            <span className='sp44'>$ 6,000</span>
                            <span className='sp45'>$ 6,000</span>
                        </div>
                </div>
            </div>
              </div>

              
          </div>
        )
    }
}
export default Comparison;