import React, {Component} from 'react';
import '../assests/css/App.css';
// import Hello from '../components/Hello.jsx'
import MyNavbar from '../components/MyNavbar'
import Login from './Login.jsx'
import Join from './Join'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component{
  constructor(props){
    super();
  }
  render(){
      return (
        <div className = 'wrapper'>
         <MyNavbar/>
         {/* <Hello/> */}
           {/* <Login/>
           <Join/> */}
      </div>
      );

  }

}

export default App;
