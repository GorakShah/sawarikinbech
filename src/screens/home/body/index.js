import React from 'react';
import BodyUp from './bodyUp/index';
import BodyDown from './bodyDown/index';

class Body extends React.Component{

    render(){
        return(
            <div className='body'>
              <BodyUp/>
              <BodyDown/>
            </div>
        )
    }
}
 export default Body;