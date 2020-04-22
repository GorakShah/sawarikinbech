import React from 'react';
import SideBar from './sideBar/index';
import Image3 from './tesla.jpg';

class BodyDown extends React.Component{

    render(){
        return(
            <div className='bodyUp' style={{background:`url(${Image3} )`, width:'100%', height:'70vh'}}>
             
              <SideBar/>
            </div>
        )
    }
}
 export default BodyDown;