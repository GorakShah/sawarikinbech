import React from 'react';
import usedOne from '../../../../../common/usedOne';
import { Tab, Tabs } from "@blueprintjs/core";

import A3 from './state-picture/arizona.jpg';
import B3 from './state-picture/california.jpg';
import C3 from './state-picture/georgia.jpg';
import D3 from './state-picture/indiana.jpg';
import E3 from './state-picture/michigan.jpg';
import F3 from './state-picture/newyork.jpg';
import G3 from './state-picture/texas.jpg';


class LeftPart extends React.Component{

    constructor(props){
      super(props);
      this.state={
          data:[{stateName:'california', stateImage:A3 },
                {stateName:'california', stateImage:B3 },
                {stateName:'california', stateImage:C3 },
                {stateName:'california', stateImage:D3 },
                {stateName:'california', stateImage:E3},
                {stateName:'california', stateImage:F3 },
                {stateName:'california', stateImage:G3 },

                ],
          
         carsData:[
            {stateName:'california', stateImage:E3},
            {stateName:'california', stateImage:F3 },
            {stateName:'california', stateImage:G3 },
         ],

         bikesData:[
            {stateName:'california', stateImage:B3 },
            {stateName:'california', stateImage:C3 },
            {stateName:'california', stateImage:D3 },
            {stateName:'california', stateImage:E3},
                   ],

         scootersData:[
            {stateName:'california', stateImage:A3 },
            {stateName:'california', stateImage:B3 },
            {stateName:'california', stateImage:C3 },
                      ],


      }
    }

    carsPanel(){
        return(
          <div className='all-content'>
                   {this.state.carsData.map(usedOne)}
                 </div>
        )
      }
  
      bikesPanel(){
        return(
          <div className='all-content'>
                   {this.state.bikesData.map(usedOne)}
                 </div>
        )
      }
  
  
      scootersPanel(){
        return(
          <div className='all-content'>
                   {this.state.scootersData.map(usedOne)}
                 </div>
        )
      }
  
      handleTabChange=(tabid)=>{
        this.setState({tabid:tabid})
      }
  

    render(){
        return(
            <div className='leftPart'>
                
                     <span className='s2'>Used</span>
                     
                <div className='state-pics'>
                    <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.tabid}>

                        <Tab id="ng" title="cars" panel={this.carsPanel()} />
                        <Tab id="mb" title="bikes" panel={this.bikesPanel()} panelClassName="ember-panel" />
                        <Tab id="rx" title="scooters" panel={this.scootersPanel()} />
                    </Tabs>
                </div>
            </div>
        )
    }
}
 export default LeftPart;