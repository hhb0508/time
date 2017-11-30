import React,{Component} from 'react';
import './Searchipt.scss';

class Searchipt extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div className="head_search">
                <span className="position">大连</span>
                    <div className="search_ipt">
                        <i className="iconfont search_i">&#xe63e;</i>
                        <span>影片/影院/影人，任你搜</span>
                    </div>
            </div>
            ); 
    }
} 

export default Searchipt;
