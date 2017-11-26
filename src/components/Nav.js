import React,{Component} from 'react';
import './Nav.css';

class Nav extends Component{
	render(){
		var image=["1.img","2.img","3.img","4.img","5.img","6.img","7.img","8.img"];
		var lei=["美食","晚餐","商超便利","果蔬生鲜","新店特惠","米粉面馆","甜品饮品","医药健康"]
		var li=["li1","li2","li3","li4","li5","li6","li7","li8"]
		li1["name:没事","img:1.img"]
		li2["name:没事","img:1.img"]
		li3["name:没事","img:1.img"]
		li4["name:没事","img:1.img"]
		li5["name:没事","img:1.img"]
		li6["name:没事","img:1.img"]
		li7["name:没事","img:1.img"]
		li8["name:没事","img:1.img"]
		return(
			<div className="nav">
				<div className="tu">{
					image.map(function(item,index){

						return(lei.map(function(bie,index1){
							return(<div className="pian"><img src="../image/{image}"/><p key={index1}>{bie}</p></div>)							
						}))

					})
					
				}
					
				</div>
			</div>
		)
	}
}

export default Nav;