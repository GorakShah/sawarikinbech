import React from 'react';
import { Card } from '@blueprintjs/core';

export default function newsB(value){
    return(
      <Card interactive className='news-content'>
         <div className='img-content'>
           <img src={value.newsimage}/>
         </div>
         <div className='all-spans'>
          <h2>Five Most Fuel Effient Petrol  Cars Tested In 2019</h2>
          <h6>Dec 28, 2019</h6>
          <h5>Two Of the five cars on our list use an auto..</h5>
         </div>
      </Card>
      
    )
  } 