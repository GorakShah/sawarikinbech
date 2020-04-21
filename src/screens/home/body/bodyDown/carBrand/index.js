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






class CarBrand extends React.Component{

    render(){
        return(
            <div className='carBrand'>
              <span className='span1'>Popular Car Brands</span>
              <div className='popular-car-brand'>
                <img src={Acuralogo} />
                <img src={Bmwlogo}/>
                <img src={Hondalogo}/>
                <img src={ToyataLogo}/>
                <img src={Infinitylogo}/>
                <img src={Hyuddailogo}/>
                <img src={Mazda}/>
                <img src={Nissan}/>
                <img src={Teslalogo}/>
                <img src={Cherolet}/>

               
              </div>
            </div>
        )
    }
}
 export default CarBrand ;