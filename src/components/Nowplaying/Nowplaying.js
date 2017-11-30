import React,{Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom'


class Nowplaying extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div>
                Nowplaying组件
            </div>
        )
    }
}

export default Nowplaying;