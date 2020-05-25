import React from 'react';
import {Popover,Position,PopoverInteractionKind} from '@blueprintjs/core';

function contentElement(obj){
    return(
        <div className='list1'>
        <span>{obj.name}</span>
     </div>

     )
}

function popoverContent(arr){
    return(
        
        <div className='all-lists'>
         {arr.map(contentElement)}
          
        </div>
    )
}

export default function menuItem(obj){
    console.log(Object.values(obj)[0]);
    return(
        <Popover boundary="viewport" className='popover'
        content={popoverContent(Object.values(obj)[0])}  
        interactionKind={PopoverInteractionKind.HOVER} 
        position={Position.BOTTOM} 
        modifiers={{arrow:{enabled:false}}}
        >
       <span>{Object.keys(obj)[0]}</span>
    </Popover> 
    )
}






























 