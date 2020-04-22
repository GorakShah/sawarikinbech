import React from 'react';
import Image2 from './male.png';

class Login extends React.Component{

    render(){
        return(
            <div  className='login'>
             <img src={Image2} />
             <span  className='register'>Login/Register</span>
            </div>
        )
    }
}
 export default Login;