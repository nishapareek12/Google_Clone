import React , {useState} from "react";
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {Button} from '@material-ui/core';
import {useNavigate} from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }){
    const[{term},dispatch] = useStateValue();
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();
        console.log("you hit search" , input);
        dispatch({
          type: actionTypes.SET_SEARCH_TERM,
          term: input
        });
        navigate('/Search');
       
    };
     
   
    return(
      <form className="Search">
      <div className="Search_input">
        <SearchIcon className="search__inputIcon"/>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <MicIcon/>
      </div>

      {!hideButtons ? (<div className="search__buttons">
         <Button type="submit" onClick={search} varient="outlined">Google Search</Button>
         <Button varient="outlined">I am feeling lucky</Button>
      </div>) : (<div className="search__buttons">
         <Button  className = "search__buttonsHidden" type="submit" onClick={search} varient="outlined">Google Search</Button>
         <Button className = "search__buttonsHidden" varient="outlined">I am feeling lucky</Button>
      </div>) }
      </form>  
    );
}

export  default Search;