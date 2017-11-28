import React,{Component} from 'react';
import axios from 'axios'
import './Shop.css'
import { Carousel } from 'antd';
import ReactDOM from 'react-dom'


export default class Shop extends Component {
	constructor(){
	  super();
	  this.state={
	    message:[]
	  }
	}
	componentDidMount(){
		
		var that = this;
   		axios.get("/Service/callback.mi/PageSubArea/MarketFirstPageNew.api?t=201711271594013038")
   		.then(function(response){
   		  console.log(response.data)
   		  that.setState({
   		    message:response.data
   		  })
   		  
	
   		})
   		this.shopping();
	}
	shopping(){
	
		// ReactDOM.render(
		  
		// , this.refs.banner);
	}
	render(){
		console.log(this.state.message.scrollImg)
		if(this.state.message.scrollImg){
			var list =this.state.message.scrollImg.map((item, index)=>{
		      
		        return (
		          <div key={item.url} className='sliderimg'>
		              
		              <img src={item.image} />
		            
		          </div>
		        );
		      
     
    		})	
		}
				
		return(
			<div ref='banner'>
				<Carousel autoplay>
		  		  {list}
		  		  
		  		</Carousel>
			</div>
		)
	}
}
