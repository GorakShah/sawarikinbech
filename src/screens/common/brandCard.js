import React from 'react';
import { Card } from '@blueprintjs/core';
import {Link} from 'react-router-dom';


export default function brandCard(value){
    return(
    <Link to={`/car/brand/${value.brandName}`}>
      <Card interactive className='whole-content'>
      <img src={value.brandimage}  style={{height:60, width:50}}/>
      <span>{value.brandName}</span>
      </Card>
    </Link>
      
    )
  }