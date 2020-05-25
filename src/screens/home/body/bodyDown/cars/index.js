import React from 'react';
import vehicleCard from '../../../../common/vehicleCard';
import { Tab, Tabs } from "@blueprintjs/core";
import A1 from './toyota-pics/2020-toyota-venza.jpg';
import B1 from './toyota-pics/Corolla_Hybrid_018.jpg';
import C1 from './toyota-pics/toyata-corolla 2020.jpeg'
import D1 from './toyota-pics/toyota yaris 2020.jpg';
import E1 from './toyota-pics/Toyota-iq-2020.png';
import F1 from './toyota-pics/toyota-le-2020.jpg';
import G1 from './toyota-pics/toyota-prius-2020.png';






class Cars extends React.Component{

    constructor(props){
        super(props);
        this.state={data:[
          {brandName:'toyota venza', brandimage:A1 ,priceTag:'$20,000'},
          {brandName:'corolla hybrid', brandimage:B1 ,priceTag:'$21,000'},
          {brandName:'toyota corolla', brandimage:C1 ,priceTag:'$22000'},
          {brandName:'toyota yaris', brandimage:D1 ,priceTag:'$23,000'},
          {brandName:'toyota iq', brandimage:E1 ,priceTag:'$24,000'},
          {brandName:'toyota le', brandimage:F1 ,priceTag:'$25,000'},
          {brandName:'toyota prius', brandimage:G1 ,priceTag:'$26,000'}
          
                        ], 

                    tabid:'ng', 

                   latestData:[
                    {brandName:'toyota venza', brandimage:A1 ,priceTag:'$20,000'},
                    {brandName:'corolla hybrid', brandimage:B1 ,priceTag:'$21,000'},
                    {brandName:'toyota corolla', brandimage:C1 ,priceTag:'$22000'},
                    {brandName:'toyota yaris', brandimage:D1 ,priceTag:'$23,000'},
                    {brandName:'toyota iq', brandimage:E1 ,priceTag:'$24,000'},
                    {brandName:'toyota le', brandimage:F1 ,priceTag:'$25,000'},
                    {brandName:'toyota prius', brandimage:G1 ,priceTag:'$26,000'}
                              ],


                  upcomingData:[ {brandName:'toyota venza', brandimage:A1 ,priceTag:'$20,000'},
                                  {brandName:'toyota corolla', brandimage:C1 ,priceTag:'$22000'},
                                  {brandName:'toyota prius', brandimage:G1 ,priceTag:'$26,000'}
                              ],


                   usedData:[{brandName:'toyota le',  brandimage:F1 ,priceTag:'$25,000'},
                             {brandName:'corolla hybrid', brandimage:B1 ,priceTag:'$21,000'},
                             {brandName:'toyota venza', brandimage:A1 ,priceTag:'$20,000'},
                             {brandName:'toyota yaris', brandimage:D1 ,priceTag:'$23,000'},

                            ]  

          }
          
    
        
      }

    latestPanel(){
      return(
        <div className='latest-cars'>
                 {this.state.latestData.map(vehicleCard)}
               </div>
      )
    }

    upcomingPanel(){
      return(
        <div className='latest-cars'>
                 {this.state.upcomingData.map(vehicleCard)}
               </div>
      )
    }


    usedPanel(){
      return(
        <div className='latest-cars'>
                 {this.state.usedData.map(vehicleCard)}
               </div>
      )
    }

    handleTabChange=(tabid)=>{
      this.setState({tabid:tabid})
    }



    render(){
        return(
            <div className='cars'>
               <div >
                 <span className='s2'>Cars</span>
                 
                 <Tabs id="TabsExample" onChange={this.handleTabChange} selectedTabId={this.state.tabid}>
                    <Tab id="ng" title="Latest" panel={this.latestPanel()} />
                    <Tab id="mb" title="Upcoming" panel={this.upcomingPanel()} panelClassName="ember-panel" />
                    <Tab id="rx" title="Used" panel={this.usedPanel()} />
  
                 </Tabs>

               </div>
               
                
            </div>
        )
    }
}
 export default Cars ;