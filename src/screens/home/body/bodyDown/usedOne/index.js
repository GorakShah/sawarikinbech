import React from 'react';
import LeftPart from './leftPart/index';
import RightPart from './rightPart';



class UsedOne extends React.Component{

    render(){
        return(
            <div className='usedOne'>
              <LeftPart/>
              <RightPart/>
            </div>
        )
    }
}
 export default UsedOne;