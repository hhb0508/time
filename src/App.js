import React,{Component}  from 'react';
import './App.css';
import Header from './components/Header.js';
import './components/Header.scss';
class App extends Component{
  render(){
    return (
        <div className="box">
            <Header></Header>
        </div>
      );
  }
}

export default App;