import React from 'react';
import Suzuki from './sz1.jpg';

import newsB from '../../../../common/newsCard';

class News extends React.Component{


   constructor(props){
      super(props);
      this.state={data:[
        { newsimage:Suzuki},
        { newsimage:Suzuki},
        { newsimage:Suzuki},
        { newsimage:Suzuki}
        
      ]}
    }
     



    render(){
        return(
            <div className='newsA'>
              <div className='heading'>
                <h1>News</h1>
              </div>

              <div className='all-news-content'>
                {this.state.data.map(newsB)}
              </div>
   
            </div>
                
        )
    }
}
export default News;