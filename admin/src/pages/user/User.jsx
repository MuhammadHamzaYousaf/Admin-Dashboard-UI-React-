import React from 'react';
import "./User.css";
import {Link} from 'react-router-dom';
import {CalendarToday, LocationSearching, MailOutline,Publish, PermIdentity, PermIdentityOutlined, PhoneAndroid} from '@material-ui/icons';
const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Becker</span>
                            <span className="userShowJobTitle">Software Enginerr</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentityOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">annaback99</span>
                        </div>

                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">10.12.1999</span>
                        </div>
                        
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+92 33333333</span>
                        </div>

                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">annaback@gmail.com</span>
                        </div>

                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Lahore Punjab | Pakistan</span>
                        </div>

                    </div>
                </div>
                <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form action="" className="userUpdateForm">
                            <div className="userUpdateLeft">
                                
                                <div className="userUpdateitem">
                                    <label>UserName</label>
                                    <input type="text" 
                                    placeholder="anaback99" 
                                    className="userUpdateInput"/>
                                </div>

                                <div className="userUpdateitem">
                                    <label>Full Name</label>
                                    <input type="text" 
                                    placeholder="Anna Backer" 
                                    className="userUpdateInput"/>
                                </div>

                                <div className="userUpdateitem">
                                    <label>Email</label>
                                    <input type="email" 
                                    placeholder="anaback99@gmial.com" 
                                    className="userUpdateInput"/>
                                </div>

                                <div className="userUpdateitem">
                                    <label>Phone Number</label>
                                    <input type="text" 
                                    placeholder="+92 3333333333" 
                                    className="userUpdateInput"/>
                                </div>

                                <div className="userUpdateitem">
                                    <label>Address</label>
                                    <input type="text" 
                                    placeholder="Lahore Punjab | Pakistan" 
                                    className="userUpdateInput"/>
                                </div>
                            </div>

                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                                    alt=""
                                    className="userUpdateImg" />
                                    <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                    <input type="file" id="file" style={{display:"none"} }/> 
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    
                </div>
            </div>
        </div>
    )
}

export default User