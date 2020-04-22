import React from 'react';
import Corolla from './sz1.jpg';


class News extends React.Component{

    render(){
        return(
            <div className='newsA'>
               <h1>News</h1>
             <div className='whole-component'>
                      
               <div className='whole-content'>
               <img src={Corolla}/>
               <div className='psp1'>
                  <span className='sp66'>Five Most Fuel Efficient Cars We Tested In 2019</span>
                  <span className='sp67'>Dec 28,2019</span>
                  <span className='sp68'>Two of the five cars on our list use an auto..</span>
               </div>
             </div>
                 
             <div className='whole-content'>
               <img src={Corolla}/>
               <div className='psp1'>
                  <span className='sp66'>Five Most Fuel Efficient Cars We Tested In 2019</span>
                  <span className='sp67'>Dec 28,2019</span>
                  <span className='sp68'>Two of the five cars on our list use an auto..</span>
               </div>
             </div>
             <div className='whole-content'>
             <img src={Corolla}/>
             <div className='psp1'>
                <span className='sp66'>Five Most Fuel Efficient Cars We Tested In 2019</span>
                <span className='sp67'>Dec 28,2019</span>
                <span className='sp68'>Two of the five cars on our list use an auto..</span>
             </div>
           </div>

           <div className='whole-content'>
           <img src={Corolla}/>
           <div className='psp1'>
              <span className='sp66'>Five Most Fuel Efficient Cars We Tested In 2019</span>
              <span className='sp67'>Dec 28,2019</span>
              <span className='sp68'>Two of the five cars on our list use an auto..</span>
           </div>
         </div>
               </div>
   
            </div>
                
        )
    }
}
export default News;