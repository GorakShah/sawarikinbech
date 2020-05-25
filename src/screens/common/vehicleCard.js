import React from 'react';
import { Card } from '@blueprintjs/core';

 export default function vehicleCard(value){
    return(
      <Card interactive  className='vehicle-content'>
        <img src={value.brandimage} />
        <span>{value.brandName}</span>
        <span id='s1'>{value.priceTag}</span>
      </Card>
      
    )
  }