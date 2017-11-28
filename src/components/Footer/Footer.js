import React,{Component} from 'react';
import './Footer.scss';

class Footer extends Component{
    constructor(prop){
        super(prop);
    }

    render(){
        return(
            <div className="footer">
                <ul className="footer_nav">
                    <li className="footer_nav_item">首页</li>
                    <li className="footer_nav_item">购票</li>
                    <li className="footer_nav_item">商城</li>
                    <li className="footer_nav_item">发现</li>
                    <li className="footer_nav_item">我的</li>
                </ul>
                <ul className="footer_tools">
                    <li className="footer_tools_item">PC版</li>
                    <li className="footer_tools_item">客户端下载</li>
                    <li className="footer_tools_item">意见反馈</li>
                    <li className="footer_tools_item">帮助中心</li>
                </ul>
                <div className="mtime_info">
                    <span></span>
                    <p>Copyright 2006-2017 Mtime.com Inc.All rights reserved.</p>

                </div>
            </div>
            );
    }
}