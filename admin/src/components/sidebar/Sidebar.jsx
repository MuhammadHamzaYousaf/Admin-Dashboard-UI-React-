import React from 'react';
import "./Sidebar.css";
import {Link} from 'react-router-dom';
import {
    PermIdentityOutlined,
    TrendingUpOutlined,
    TimelineOutlined,
    HomeOutlined,
    Storefront,
    AttachMoney,
    BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from '@material-ui/icons';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className="link">
                    <li className="sidebarListitem active">
                        <HomeOutlined className="sidebaricon"/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListitem">
                        <TimelineOutlined className="sidebaricon"/>
                        Analytics
                    </li>
                    <li className="sidebarListitem">
                        <TrendingUpOutlined className="sidebaricon"/>
                        Sales
                    </li>
                    
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users">
                    <li className="sidebarListitem">
                        <PermIdentityOutlined className="sidebaricon"/>
                        Users
                    </li>
                    </Link>
                    <Link to="/products">
                    <li className="sidebarListitem">
                        <Storefront className="sidebaricon"/>
                        Products
                    </li>
                    </Link>
                    <li className="sidebarListitem">
                        <AttachMoney className="sidebaricon"/>
                        Transactions
                    </li>
                    <li className="sidebarListitem">
                        <BarChart className="sidebaricon"/>
                        Reports
                    </li>
                    
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListitem">
                        <MailOutline className="sidebaricon"/>
                        Mail
                    </li>
                    <li className="sidebarListitem">
                        <DynamicFeed className="sidebaricon"/>
                        FeedBack
                    </li>
                    <li className="sidebarListitem">
                        <ChatBubbleOutline className="sidebaricon"/>
                        Messages
                    </li>
                    
                </ul>
                </div>

                <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListitem">
                        <WorkOutline className="sidebaricon"/>
                        Manage
                    </li>
                    <li className="sidebarListitem">
                        <TimelineOutlined className="sidebaricon"/>
                        Analytics
                    </li>
                    <li className="sidebarListitem">
                        <Report className="sidebaricon"/>
                        Reports
                    </li>
                    
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
