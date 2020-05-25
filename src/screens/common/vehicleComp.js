import React from 'react';
import { Card } from '@blueprintjs/core';

export default function compare(arr){
    const car1=arr[0];
    const car2=arr[1];
    
    return(
        <Card interactive className='both-content'>
          <div className='img-content'>
            <div className='left-img'>
              <img src={car1.carImage}/>
            </div>
            <div className='vs'>
               <div className='child-vs'>
                 <span>Vs</span>
               </div>
            </div>
            <div className='right-img'>
               <img src={car2.carImage}/>
            </div>
          </div>

          <div className='spans'>
            <div className='names'>
              <span>{car1.carName}</span>
              <span>{car2.carName}</span>
            </div>
            <div className='prices'>
              <span>{car1.price}</span>
              <span>{car2.price}</span>
            </div>
          </div>
        </Card>
    )
}