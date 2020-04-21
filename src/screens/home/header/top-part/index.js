import React from 'react';
import Logo from './logo/index';
import Login from './login/index';
import SearchBox from './searchBox/index';

class Toppart extends React.Component{

    render(){
        return(
            <div  className='top-part'>
             <Logo/>
             <SearchBox/>
             <Login/>
            </div>
        )
    }
}
 export default Toppart;