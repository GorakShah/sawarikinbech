import React from 'react';
import { Card } from '@blueprintjs/core';

export default function usedone(value){
    return(
        <Card interactive className='all-content'>
          <img src={value.stateImage}/>
          <span>{value.stateName}</span>
        </Card>
    )
}