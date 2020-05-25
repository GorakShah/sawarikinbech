import React from 'react';
import Corolla from './corolla.jpg';
import Prius from './toyata-prius.jpg';

import vehicleComparison from '../../../../common/vehicleComp';

class CarComparison extends React.Component{
 
    constructor(props){
      super(props);
        this.state={data:[ [{carName:'toyata corolla' ,price:'$20,000', carImage:Corolla}, 
                            {carName:'toyota prius' ,price:'$20,000', carImage:Prius}
                            ],
                            
                            [{carName:'toyata venza' ,price:'$21,000', carImage:Corolla}, 
                             {carName:'toyota yaris' ,price:'$21,000', carImage:Prius}
                            ],

                            [{carName:'toyata camry' ,price:'$22,000', carImage:Corolla}, 
                             {carName:'toyota avalon' ,price:'$22,000', carImage:Prius}
                            ],

                            [{carName:'toyata rav4' ,price:'$23,000', carImage:Corolla}, 
                             {carName:'toyota camry awd' ,price:'$23,000', carImage:Prius}
                            ]
                        ]
                    }

    }
     
 

    render(){
        return(
            <div className="car-compare">
              <span className='title'>Popular Car Comparisons</span>
                  
              <div className='all-one'>
                   {this.state.data.map(vehicleComparison)}
              </div>

              
          </div>
        )
    }
}
export default CarComparison;