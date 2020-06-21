import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';

import Background from './food-bg.jpg';
import {Route} from "react-router-dom";
import {connect} from "react-redux";

const App = ({total}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={total}/>
            <Route path='/' exact component={MainPage}/>
            <Route path='/cart' exact component={CartPage}/>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    total: state.totalCart,
  }
}


export default connect(mapStateToProps)(App);