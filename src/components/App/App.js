import React,{Component}  from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch
} from 'react-router-dom' //包含 这两个HashRouter 和 BrowserRouter
import './App.css';
import Header from '../Header/Header.js';
// import Searchipt from '../Search/Searchipt.js';
import Footer from '../Footer/Footer.js';
import Routes from '../../router.js';
class App extends Component{

  constructor(prop){
    super(prop);
  }

  render(){
    return (
        <div className="box">
        <Router>
          <div>
            <Header></Header>
            <Routes/>
            <Footer/>
            </div>
        </Router>    

           
        </div>
      );
  }
}

export default App;