import React from 'react';

import menuStructure from './menuStructure';
import menuItem from './menuItem';
import {link} from 'react-router-dom';

class Mainmenu extends React.Component{

 
    render(){
        return(
            <div  className='mainmenu'>
            <span>Home</span>
             
            {menuStructure().map(menuItem)}
            </div>
        )
    }
}
 export default Mainmenu;