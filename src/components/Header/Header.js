import React,{Component} from 'react';
// import {NavLink} from "react-router-dom";
import './Header.scss';        
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Link,
	Switch,
	NavLink
} from 'react-router-dom';                                                                                                                                                                                                                                                 

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
					<NavLink to="/home" className="nav_item" activeClassName="active">首页</NavLink>
					<NavLink to="/ticket" className="nav_item" activeClassName="active">购票</NavLink>
					<NavLink to="/shop" className="nav_item" activeClassName="active">商城</NavLink>
					<NavLink to="/discovery" className="nav_item" activeClassName="active">发现</NavLink>
				</ul>
				<i className="iconfont">&#xe608;</i>
			</div>
		);
	}
}

export default Header;