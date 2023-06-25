import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search"
function Home(){
   
    return(
        <div className="home">
            <div className="home_header">
                <div className="home_headerleft">
                   <Link to='/about'>about</Link>
                   <Link to='/Store'>Store</Link>

                </div>
                <div className="home_headerright">
                <Link to='/gmail'>gmail</Link>
                <Link to='/images'>images</Link>
                <AppsIcon/>
                <Avatar/>

                </div>
            </div>
            <div className="home_body">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH4rERyVrBJXWF8nLkevCnpwq40CFKUu3Zf0zl0mJu3dBxjrM6X4zeVORMZAObeYkwZ8&usqp=CAU"></img>
            <div className="home_inputcontainer">
                 <Search hideButtons/>
            </div>
            </div>
        </div>
    );


};

export default Home;