import React from 'react';

import Bmwlogo1 from './bikeBrandLogo/bmwlogo1.jpg';
import Bolwel from './bikeBrandLogo/Bolwell logo.png';
import Ducati from './bikeBrandLogo/ducati.jpg'
import Hero from './bikeBrandLogo/hero.png';
import Honda from './bikeBrandLogo/honda.JPG';
import Jenis from './bikeBrandLogo/jemis.png';
import Ktm from './bikeBrandLogo/ktm.jpg';
import Razor from './bikeBrandLogo/razor.png';
import Suzuki from './bikeBrandLogo/suzuki.jpg';
import Yamaha from './bikeBrandLogo/yamaha.jpg';
import Bird from './bikeBrandLogo/bird.png';

import brandCard from '../../../../common/brandCard';




class BikeBrand extends React.Component{

  constructor(props){
    super(props);
    this.state={data:[
      {brandName:'bmw', brandimage:Bmwlogo1},
      {brandName:'bolwel', brandimage:Bolwel},
      {brandName:'ducati', brandimage:Ducati},
      {brandName:'hero', brandimage:Hero},
      {brandName:'honda', brandimage:Honda},
      {brandName:'jenis', brandimage:Jenis},
      {brandName:'ktm', brandimage:Ktm},
      {brandName:'razor', brandimage:Razor},
      {brandName:'suzuki', brandimage:Suzuki},
      {brandName:'yamha', brandimage:Yamaha},
      {brandName:'bird', brandimage:Bird} ]
    }
  }


    render(){
        return(
            <div className='bikeBrand'>
              <span className='span2'>Popular Bike And scooter Brands</span>
              <div className='popular-bike-brand'>
              
                  {this.state.data.map(brandCard)}
                
              </div>
            </div>
        )
    }
}
 export default BikeBrand ;