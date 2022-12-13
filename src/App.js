import React, { Component } from "react";
import {  Routes , Route } from "react-router-dom";

import Home from "./pages/home"
import Hollywood from "./pages/hollywood";
import Bollywood from "./pages/bollywood";
import Technology from "./pages/technology";
import Food from "./pages/food";
import Fitness from "./pages/fitness";
import Header from "./basic_components/header";
import navtab from "./navtab.json"
import Article from "./pages/article";


class App extends Component{

    state={
        
        navtabtitles : navtab
    }

 

    render(){
    
        return(
            <>
                
                <Header  navtabtitles={this.state.navtabtitles}/>
                
                    <Routes>
                        
                            <Route path="/category/Bollywood" element={<Bollywood />} />
                            <Route path="/category/Technology" element={<Technology />}/>
                            <Route path="/category/Hollywood" element={<Hollywood />} />
                            <Route path="/category/Food" element={<Food/>} />
                            <Route path="/category/Fitness" element={<Fitness />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/article/:category/:id" element={<Article />} />
                       
                    </Routes>
                    
                    
                

                
            </>
        );
    }
}

export default App;



