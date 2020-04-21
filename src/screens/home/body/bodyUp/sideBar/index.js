import React from 'react';

class SideBar extends React.Component{

 render(){
    return(
         <div className='sideBar'>
            
            <h2>Choose your right vehicle</h2>

            <div className='button-menu'>
                <button className='buttonNew'>New</button>
                <button className='buttonUsed'>Used</button>
            </div>

            <div className='radio-button'>
              <input type='radio' name='gender'/>
              <span>By Budget</span>
              <input type='radio' name='gender'/>
              <span>By Brand</span>
            </div>



            <div className='select-type'>
                    
                    <select className='selectA' >
                      <option value='bmw'>car</option>
                      <option value='honda'>honda</option>
                    </select>
    
                    <select className='selectB'>
                      <option value='suzuki'>bike</option>
                      <option value='hero'>hero</option>
                    </select>
            </div>
            
            <button type='submit' className='search'>Search</button>
        </div>
        )
    }
}
 export default SideBar;