import React from 'react'
import './Featuredinfo.css';
import{ArrowDownwardOutlined,
    ArrowUpwardOutlined
} from "@material-ui/icons";
const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <span className="featuredTitle">
                    Revenue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,454</span>
                    <span className="featuredMoneyRate">-11.4  <ArrowDownwardOutlined className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>


            <div className="featureditem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,454</span>
                    <span className="featuredMoneyRate"> -1.4  <ArrowDownwardOutlined className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>

            <div className="featureditem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,024</span>
                    <span className="featuredMoneyRate">+2.1  <ArrowUpwardOutlined className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">
                    Compared to last month
                </span>
            </div>
        </div>
    )
}

export default FeaturedInfo
