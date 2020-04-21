import React from 'react';
import A3 from './state-picture/arizona.jpg';
import B3 from './state-picture/california.jpg';
import C3 from './state-picture/georgia.jpg';
import D3 from './state-picture/indiana.jpg';
import E3 from './state-picture/michigan.jpg';
import F3 from './state-picture/newyork.jpg';
import G3 from './state-picture/texas.jpg';


class LeftPart extends React.Component{

    render(){
        return(
            <div className='leftPart'>
                <div>
                     <span className='s2'>Used</span>
                    <div>
                        <span className='s3'>Cars</span>
                        <span className='s3'>Bikes</span>
                        <span className='s3'>Scooters</span>
                    </div>
                </div>
            
                <div className='state-pics'>
                    <div className='a11'>
                     <img src={A3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 1</span>
                    </div>
                    
                    <div className='a11'>
                     <img src={B3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 2</span>
                    </div>

                    <div className='a11'>
                     <img src={C3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 3</span>
                    </div>

                    <div className='a11'>
                     <img src={D3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 4</span>
                    </div>
                    
                    <div className='a11'>
                     <img src={E3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 5</span>
                    </div>

                    <div className='a11'>
                     <img src={F3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 6</span>
                    </div>

                    <div className='a11'>
                     <img src={G3}/>
                     <span className='l11'>Used Vehicle in State</span>
                     <span>State 7</span>
                    </div>

                </div>
            </div>
        )
    }
}
 export default LeftPart;