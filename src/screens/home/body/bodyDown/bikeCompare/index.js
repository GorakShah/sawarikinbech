import React from 'react';
import Bullet from './bullet.jpg';
import Bajaj from './unnamed.jpg';
import vehicleComparison from '../../../../common/vehicleComp';

class BikeComparison extends React.Component{



    constructor(props){
        super(props);
          this.state={data:[ [{carName:'toyata corolla' ,price:'$3,000', carImage:Bullet}, 
                              {carName:'toyota prius' ,price:'$3,000', carImage:Bajaj}
                              ],
                              
                              [{carName:'toyata venza' ,price:'$4,000', carImage:Bullet}, 
                               {carName:'toyota yaris' ,price:'$4,000', carImage:Bajaj}
                              ],
  
                              [{carName:'toyata camry' ,price:'$5,000', carImage:Bullet}, 
                               {carName:'toyota avalon' ,price:'$5,000', carImage:Bajaj}
                              ],
  
                              [{carName:'toyata rav4' ,price:'$6,000', carImage:Bullet}, 
                               {carName:'toyota camry awd' ,price:'$6,000', carImage:Bajaj}
                              ]
                          ]
                      }
  
      }
     
   
      

    render(){
        return(
            <div className="bike-compare">
            <span className='title'>Popular Car Comparisons</span>
                
            <div className='two-one'>
                 {this.state.data.map(vehicleComparison)}
            </div>

            
        </div>
             
        )
    }
}
export default  BikeComparison;