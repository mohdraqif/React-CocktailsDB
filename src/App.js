import React, { Component } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import SingleCocktail from './pages/SingleCocktail'
import {Route, Switch} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route exact path='/cocktail/:id' component={SingleCocktail}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}
