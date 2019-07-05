import React, {Component} from 'react';
import './App.css';
import Hello from './presentational/atoms/Hello.js'
import navbar from '../../present/navbar.js'
class App extends Component{
  render(){
      return (
        <Hello name='홍길동'></Hello>
      );

  }

}

export default App;
