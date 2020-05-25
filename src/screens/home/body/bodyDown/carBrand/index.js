import React from 'react';
import Acuralogo from './acuralogo.png';
import Bmwlogo from './bmwlogo.jpg';
import Hondalogo from './hondalogo.jpg';
import Hyuddailogo from './hyuddailogo.png';
import Infinitylogo from './infintylogo.jpg';
import ToyataLogo from './royatalogo.png';
import Mazda from './mazdalogo.png';
import Nissan from './nissanlogo.png';
import Teslalogo from './teslalogo.jpg';
import Cherolet from './cherolet.png';

import brandCard from '../../../../common/brandCard';




class CarBrand extends React.Component{

  constructor(props){
    super(props);
    this.state={data:[
      {brandName:'acura', brandimage:Acuralogo},
      {brandName:'bmw', brandimage:Bmwlogo},
      {brandName:'cherolet', brandimage:Cherolet},
      {brandName:'honda', brandimage:Hondalogo},
      {brandName:'hyndai', brandimage:Hyuddailogo},
      {brandName:'infinity', brandimage:Infinitylogo},
      {brandName:'mazada', brandimage:Mazda},
      {brandName:'nissan', brandimage:Nissan},
      {brandName:'toyota', brandimage:ToyataLogo},
      {brandName:'tesla', brandimage:Teslalogo}
    ]}
  }

    

    render(){
        return(
            <div className='carBrand'>
              <span className='span1'>Popular Car Brands</span>
              <div className='popular-car-brand'>
                {this.state.data.map(brandCard)}
              </div>
            </div>
        )
    }
}



 
 export default CarBrand ;





















