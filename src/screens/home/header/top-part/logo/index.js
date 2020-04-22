import React from 'react';
import Car from './cars.png';

class Logo extends React.Component{

    render(){
        return(
            <div className='logo'>
              <img src={Car} />
            </div>
        )
    }
}
 export default Logo;