import React,{Component} from 'react';
// import {NavLink} from "react-router-dom";
import './Header.scss';                                                                                                                                                                                                                                                         

class Header extends Component{
	constructor(prop){
		super(prop);
	}
	render(){
		return(
			<div className="header">
				<a href = "#!/">
					<i className = "logo_mtime"></i>
				</a>
				<ul className="header_nav">
					<li className="nav_item"><a href="/">首页</a></li>
					<li className="nav_item"><a href="/">购票</a></li>
					<li className="nav_item"><a href="/">商城</a></li>
					<li className="nav_item"><a href="/">发现</a></li>
				</ul>
				<i className="iconfont">&#xe608;</i>
			</div>
		);
	}
}

export default Header;