import React from "react";
import {Link, Route} from 'react-router-dom';
import Home from './components/Home'
import Pizza from './components/Pizza'

const App = () => {
  return (
    <div>
      <header>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/pizza">
        <Pizza/>
      </Route>
      </header>
    </div>
  );
};
export default App;
