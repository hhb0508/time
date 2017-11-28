import React,{Component}  from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import './components/Header/Header.scss';
import Searchipt from './components/Search/Searchipt.js';
import Footer from './components/Footer/Footer.js';
class App extends Component{
  render(){
    return (
        <div className="box">
            <Header></Header>
            <Searchipt></Searchipt>
            <Footer></Footer>
        </div>
      );
  }
}

export default App;