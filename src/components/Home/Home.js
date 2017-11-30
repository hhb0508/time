import React,{Component} from 'react';
import Searchipt from './Searchipt.js';
import Nowplaying from '../Nowplaying/Nowplaying.js';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom' //包含 这两个HashRouter 和 BrowserRouter

class Home extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div>
                <Searchipt></Searchipt>
                这是home组件
                <section>
                    {this.props.children}
                </section>
                <Nowplaying/>
            </div>
        )
        
    }
}

export default Home;