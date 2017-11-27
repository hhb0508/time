import React,{Component} from 'react';
import './Header.scss';                                                                                                                                                                                                                                                         

class Header extends Component{
	render(){
		var list=["披萨","米线","蛋糕","糖葫芦","麻辣拌","火锅","肯德基"];
		return(
			<div className="header">
				<h5>西岗区大连市政府</h5>
				<div className="sou">
					<input type="text" placeholder="搜索商家 商品名称"/>
				</div>
				<ul className="lei">
				{
					list.map(function(item,index){
						return(<li key={index}>{item}</li>)
					})
				}
				</ul>
			</div>
		);
	}
}

export default Header;