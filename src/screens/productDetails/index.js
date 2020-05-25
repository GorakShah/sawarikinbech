import React from 'react';
import { Tab, Tabs } from "@blueprintjs/core";
import {H5, NumberRange,RangeSlider, Switch} from "@blueprintjs/core";
import Img1 from './1.jpg';
import Img2 from './2.jpg';
import Img3 from './3.jpg';
import Img4 from './4.png';
import Img5 from './5.gif';
import Img6 from './6.jpg';
import Img7 from './7.jpg';



class ProductDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={
            tabid:'ng'
        }
    }

    
 
    handleTabChange=(tabid)=>{
        this.setState({tabid:tabid})
    }

    CarsPanel(){
       return(
           <div className='cars-component'> 
              
              <div className='left-part'>
                <div className='left-first'>
                  <div className='title-first'>
                    <span id='pt1'>Price Range(Lakh)</span>
                  </div>

                  <div className='range-slider'>
                    <RangeSlider  className='range-slider'
                        min={0}
                        max={100}
                        stepSize={2}
                        labelStepSize={30}
                        onChange={this.handleValueChange}
                
                
                    />
                  </div>
                  
                </div>

                <div className='left-second'>
                    <div className='title-second'>
                        <span id='pt2'>Vehicle Type</span>
                     </div>

                     <div className='content-second'>
                       <div className='clipart'>
                         <img src={Img1} style={{height:50, width:'80%'}}/>
                         <span>Hatchback</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img2} style={{height:50, width:'80%'}}/>
                         <span>Sedan</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img3} style={{height:50, width:'80%'}}/>
                         <span>MUV</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img4} style={{height:50, width:'80%'}}/>
                         <span>SUV</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img5} style={{height:50, width:'80%'}}/>
                         <span>Luxury</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img6} style={{height:50, width:'80%'}}/>
                         <span>Minibus</span>
                       </div>
                       <div className='clipart'>
                         <img src={Img7} style={{height:50, width:'80%'}}/>
                         <span>Pickup Truck</span>
                       </div>
                     </div>
                  
                </div>

                <div className='left-third'>
                    <div className='title-third'>
                     <span id='pt3'>Fuel Type</span>
                    </div>

                    <div className='content-third'>
                       <div className='clipart2'>
                         <span>Diesel</span>
                       </div>
                       <div className='clipart2'>
                         <span>Petrol</span>
                       </div>
                       <div className='clipart2'>
                         <span>Electric</span>
                       </div>
                    </div> 
                </div>
              </div>




              <div className='right-part'>
                 <span>right</span>
              </div>
           </div>
       )
    } 
    
    DealersPanel(){
        return(
            <div> 
               <span>this component is gonna be for dealers </span>
            </div>
        )
     } 

     ServiceCenterPanel(){
        return(
            <div> 
               <span>this component is gonna be for ServiceCenter </span>
            </div>
        )
     } 
    render(){
        return(
            <div className='head-component'>
              
              <div className='topic'>
                <span id='s1'>Maruti  Suzuki</span>
              </div>

              <div className='main-component'>

                    <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.tabid}>
                      <Tab id="ng" title="Cars" panel={this.CarsPanel()} />
                      <Tab id="mb" title="Dealers" panel={this.DealersPanel()}  />
                      <Tab id="rx" title="ServiceCenter" panel={this.ServiceCenterPanel()} />
                    </Tabs>

               </div>
              
            </div>
        )
    }
}

export default ProductDetails;