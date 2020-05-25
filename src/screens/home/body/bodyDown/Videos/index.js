import React from 'react';
import { Card } from '@blueprintjs/core';





class Videos extends React.Component{

    constructor(props){
     super(props);
     this.state={data:[{link:"https://www.youtube.com/embed/spCdFMnQ1Fk"},
            {link:'https://www.youtube.com/embed/N7eBSI5zWS8'},
            {link:'https://www.youtube.com/embed/GauwBsPkXjw'},
            {link:'https://www.youtube.com/embed/gtmzPUmq7XU'}  
     ]

      }
    }

    video(value){
        return(
            <Card style={{height:350,width:'45%',margin:10 , padding:10}} interactive >
              <iframe
                    src={value.link}
                    width="100%"
                    height='100%'
                    allowFullScreen
                    id="myId"
                    className="video-card"
                    display="initial"
                    position="relative"
               />
           </Card>
        )
    }

    render(){
        return(
            <div className='videos'>
                <div className='heading'>
                  <h1>Videos</h1>
                </div>

            <div className='all-news-content'>
               {this.state.data.map(this.video)}
            </div>
            
            </div>
        )
    }
}
export default Videos;