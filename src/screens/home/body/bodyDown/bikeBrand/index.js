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



class BikeBrand extends React.Component{

    render(){
        return(
            <div className='bikeBrand'>
              <span className='span2'>Popular Bike And scooter Brands</span>
              <div className='popular-bike-brand'>
                <img src={Bmwlogo1} />
                <img src={Bolwel}/>
                <img src={Ducati}/>
                <img src={Hero}/>
                <img src={Honda}/>
                <img src={Jenis}/>
                <img src={Razor}/>
                <img src={Suzuki}/>
                <img src={Yamaha}/>
                <img src={Bird}/>

                

               
              </div>
            </div>
        )
    }
}
 export default BikeBrand ;