import React from 'react';
import HomeContainer from "./HomeContainer";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoreInfo from './MoreInfo'
import Header from './Header'
import Footer from "./Footer"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/moreinfo">
               <Header/>
               <MoreInfo/>
               <Footer/>
            </Route> 

            <Route path="/">
              <HomeContainer />
            </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
