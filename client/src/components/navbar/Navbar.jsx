import "./Navbar.scss";
import React,{useState} from 'react'
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Link} from 'react-router-dom';


const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    window.onscroll=()=>{
        setIsScroll(window.pageYOffset<= 0 ? false : true);
        return ()=>(window.onscroll=null);
    }

    
    return (
        <div className={isScroll ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                     alt="" />
                    <span><Link to="/">HomePage</Link></span>
                    <span><Link to="/series">Series</Link></span>
                    <span><Link to="/movie">Movies</Link></span>
                    <span><Link to="/undefiend">New and Popular</Link></span>
                    <span><Link to="/undefined">My List</Link></span>
                </div>
                <div className="right">
                    <SearchIcon className="icon"/>
                    <span>Kid</span>
                    <NotificationsIcon className="icon"/>
                    <img src="https://images.pexels.com/photos/3810552/pexels-photo-3810552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />    
                    <div className="dropdown">
                    <ArrowDropDownIcon className="icon"/>
                    <div className="options">
                       <span>Setting</span> 
                       <span>LogOut</span>
                    </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
