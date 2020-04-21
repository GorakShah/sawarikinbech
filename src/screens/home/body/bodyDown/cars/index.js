import React from 'react';

import A1 from './toyota-pics/2020-toyota-venza.jpg';
import B1 from './toyota-pics/Corolla_Hybrid_018.jpg';
import C1 from './toyota-pics/toyata-corolla 2020.jpeg'
import D1 from './toyota-pics/toyota yaris 2020.jpg';
import E1 from './toyota-pics/Toyota-iq-2020.png';
import F1 from './toyota-pics/toyota-le-2020.jpg';
import G1 from './toyota-pics/toyota-prius-2020.png';






class Cars extends React.Component{

    render(){
        return(
            <div className='cars'>
               <div >
                 <span className='s2'>Cars</span>
                 <div>
                    <span className='s3'>Latest</span>
                    <span className='s3'>Popular</span>
                    <span className='s3'>Upcoming</span>
                 </div>
               </div>
               
                <div className='latest-cars'>
                    
                     <img src={A1} />
                    <img src={B1}/>
                    <img src={C1}/>
                    <img src={D1}/>
                    <img src={E1}/>
                    <img src={F1}/>
                    <img src={G1}/>
                </div>
            </div>
        )
    }
}
 export default Cars ;