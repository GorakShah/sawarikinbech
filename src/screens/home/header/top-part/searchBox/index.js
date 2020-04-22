import React from 'react';
import Image1 from './search.jpeg';
class SearchBox extends React.Component{

    render(){
        return(
            <div className='searchBox'>
              <input type='text' placeholder='Search Cars Or  Brands'   className='inputBox'/>
              <button type='submit'  className='button-submit'><img src={Image1} className='button-login'/></button>
            </div>
        )
    }
}
 export default SearchBox;