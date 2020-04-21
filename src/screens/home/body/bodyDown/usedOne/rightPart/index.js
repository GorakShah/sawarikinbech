import React from 'react';



class RightPart extends React.Component{

    render(){
        return(
            <div className='rightPart'>
              <span>I am looking to buy a second
              hand vehicle in</span>
              <select className='right-button'>
                <option value='california'>california</option>
                <option value='indiana'>indiana</option>
                <option value='indiana'>georgia</option>
                <option value='indiana'>texas</option>
                <option value='indiana'>newyork</option>
                <option value='indiana'>michigan</option>
                <option value='indiana'>arizona</option>
              </select>
            </div>
        )
    }
}
 export default RightPart;