import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoeList from './components/ShoeList';
import AddNew from './components/AddNew';

class App extends Component {
  render() {
    return (
      <div className="App">
       <ShoeList/>
     <AddNew/>
      </div>
    );
  }
}

export default App;
