import React from 'react';

import CraBrand from './carBrand/index';
import BikeBrand from './bikeBrand/index';
import Cars from './cars/index';
import Bikes from './bikes/index';
import UsedOne from './usedOne/index';
import Comparison from './comparison/index';
import BikeCompare from './bikeCompare/index';
import News from './news/index';
import Videos from './Videos/index';


class BodyDown extends React.Component{

    render(){
        return(
            <div className='bodyDown'>
             <CraBrand/>
             <BikeBrand/>
             <Cars/>
             <Bikes/>
             <UsedOne/>
             <Comparison/>
             <BikeCompare/>
             <News/>
             <Videos/>
            </div>
        )
    }
}
 export default BodyDown;