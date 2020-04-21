import React from 'react';
import Corolla from './sz1.jpg';



class Videos extends React.Component{

    render(){
        return(
            <div className='videos'>
               <h1>Videos</h1>
             <div className='whole-component3'>

               <div className='whole-content3'>
                   <iframe
                        src="https://www.youtube.com/embed/spCdFMnQ1Fk"
                        width="650px"
                        height="250"
                        allowFullScreen
                        id="myId"
                        className="video-card"
                        display="initial"
                        position="relative"
                     />

               </div>


               <div className='whole-content3'>
               <iframe
                    src="https://www.youtube.com/embed/spCdFMnQ1Fk"
                    width="650px"
                    height="250"
                    allowFullScreen
                    id="myId"
                    className="video-card"
                    display="initial"
                    position="relative"
                 />

           </div>

           <div className='whole-content3'>
           <iframe
                src="https://www.youtube.com/embed/spCdFMnQ1Fk"
                width="650px"
                height="250"
                allowFullScreen
                id="myId"
                className="video-card"
                display="initial"
                position="relative"
             />

       </div>




       <div className='whole-content3'>
                   <iframe
                        src="https://www.youtube.com/embed/spCdFMnQ1Fk"
                        width="650px"
                        height="250"
                        allowFullScreen
                        id="myId"
                        className="video-card"
                        display="initial"
                        position="relative"
                     />

               </div>


               </div>

            </div>

        )
    }
}
export default Videos;