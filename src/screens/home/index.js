import React from 'react';
import Header from './header/index';
import Body from './body/index';
import Footer from './footer/index';
import RealFooter from './realFooter/index';

class Home extends React.Component{

    render(){
        return(
            <div className='home' >
             <Header/>
             <div className='body-footer'>
                <Body/>
                <RealFooter/>
             </div>
            </div>
        )
    }
}
 export default Home;