import React from 'react';
import Mainmenu from './main-manu/index';
import Toppart from './top-part/index';

class Header extends React.Component{

    render(){
        return(
            <div  className='header'>
             
             <Toppart/>
             <Mainmenu/>
             
            </div>
        )
    }
}
 export default Header;