import React from 'react';
import Header from './header/index';
import Body from './body/index';


class Home extends React.Component{

    render(){
        return(
            <div className='home' >
             <Header/>
             <div className='body-footer'>
                <Body/>
                
             </div>
            </div>
        )
    }
}
 export default Home;