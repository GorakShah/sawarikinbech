

import React from 'react';
import vehicleCard from '../../../../common/vehicleCard';
import { Tab, Tabs } from "@blueprintjs/core";

import A2 from './bikeLogo/bajaj-advenure-250-pulsar.jpg';
import B2 from './bikeLogo/bullet.jpg';
import C2 from './bikeLogo/gsx-rr-2020-ar42_7.gallery_full_top_lg.jpg'
import D2 from './bikeLogo/KTM-250-Duke-MY-2017.jpg';
import E2 from './bikeLogo/KTM-RC390-Official-Pic-India.jpg';
import F2 from './bikeLogo/royal-enfield-bullet-350-front-view.jpg';
import G2 from './bikeLogo/unnamed.jpg';
import H2 from './bikeLogo/yamaha2.jpg';
import I2 from './bikeLogo/yamay3.jpg';




class Bikes extends React.Component{

    constructor(props){
        super(props);
        this.state={data:[
          {brandName:'bajaj adventure', brandimage:A2 ,priceTag:'$5,000'},
          {brandName:'bullet', brandimage:B2 ,priceTag:'$6,000'},
          {brandName:'gsx', brandimage:C2 ,priceTag:'$7000'},
          {brandName:'ktm 250', brandimage:D2 ,priceTag:'$8,000'},
          {brandName:'ktm 390', brandimage:E2 ,priceTag:'$9,000'},
          {brandName:'royal 390', brandimage:F2,priceTag:'$6,000'},
          {brandName:'apaache', brandimage:G2 ,priceTag:'$7,000'},
          {brandName:'yamaha 100', brandimage:H2 ,priceTag:'$8,000'},
          {brandName:'yamaha 250', brandimage:I2 ,priceTag:'$9,000'},

                        ],

                    latestData:[
                      {brandName:'bajaj adventure', brandimage:A2 ,priceTag:'$5,000'},
                      {brandName:'bullet', brandimage:B2 ,priceTag:'$6,000'},
                      {brandName:'gsx', brandimage:C2 ,priceTag:'$7000'},
                               ], 
                               
                    upcomingData:[
                      {brandName:'royal 390', brandimage:F2,priceTag:'$6,000'},
                      {brandName:'apaache', brandimage:G2 ,priceTag:'$7,000'},
                      {brandName:'yamaha 100', brandimage:H2 ,priceTag:'$8,000'},
                      {brandName:'yamaha 250', brandimage:I2 ,priceTag:'$9,000'},
                                ],
                    
                    usedData:[
                      {brandName:'gsx', brandimage:C2 ,priceTag:'$7000'},
                      {brandName:'ktm 250', brandimage:D2 ,priceTag:'$8,000'},
                      {brandName:'ktm 390', brandimage:E2 ,priceTag:'$9,000'},
                      {brandName:'royal 390', brandimage:F2,priceTag:'$6,000'},
                      {brandName:'apaache', brandimage:G2 ,priceTag:'$7,000'},
                    ]

          }
      }

      latestPanel(){
        return(
          <div className='popular-bikes'>
                   {this.state.latestData.map(vehicleCard)}
                 </div>
        )
      }
  
      upcomingPanel(){
        return(
          <div className='popular-bikes'>
                   {this.state.upcomingData.map(vehicleCard)}
                 </div>
        )
      }
  
  
      usedPanel(){
        return(
          <div className='popular-bikes'>
                   {this.state.usedData.map(vehicleCard)}
                 </div>
        )
      }
  
      handleTabChange=(tabid)=>{
        this.setState({tabid:tabid})
      }

    render(){
        return(
            <div className='bikes'>
                    <div>
                       <span className='s4'>Bikes</span>
                        
                      <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.tabid}>
                        <Tab id="ng" title="Latest" panel={this.latestPanel()} />
                        <Tab id="mb" title="Upcoming" panel={this.upcomingPanel()} panelClassName="ember-panel" />
                        <Tab id="rx" title="Used" panel={this.usedPanel()} />
                      </Tabs>

                   </div>
              <div className='popular-bikes'>
                
              </div>
            </div>
        )
    }
}
 export default Bikes ;