//路由模块
import React from "react"; //引入react 解析jsx语法
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    Switch
} from 'react-router-dom' //包含 这两个HashRouter 和 BrowserRouter

//引入跟组件
import App from "./components/App/App.js";
import Header from "./components/Header/Header.js";
import Searchipt from "./components/Search/Searchipt.js";
import Footer from "./components/Footer/Footer.js";
import Ticket from "./components/Ticket/Ticket.js";
import Home from "./components/Home/Home.js";
import Shop from "./components/Shop/Shop.js";
import Discovery from "./components/Discovery/Discovery.js";
//用router包裹组件
const router = ()=>(
    
    <div>
       <Route path="/home" component={Home}/>
       <Route path='/ticket' component={Ticket}/>
       <Route path='/shop' component={Shop}/> 
       <Route path='/Discovery' component={Discovery}/>
    </div>
    
)
    


export default router;