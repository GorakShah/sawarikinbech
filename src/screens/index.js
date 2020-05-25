import React from 'react';
import Home from './home/index';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Footer from './home/footer/index';
import ProductDetails from './productDetails/index';

class Screens extends React.Component{

    render(){
        return(
            <Router>
              <Route path='/' exact>
                <Home/>
              </Route>

              <Route path='/footer' component={Footer}/>
              <Route path='/car/brand/:brandName' component={ProductDetails}/>
            </Router>

        )
    }
}
 export default Screens;