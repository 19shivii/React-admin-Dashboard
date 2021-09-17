import "./featuredInfo.css"
import { ArrowDownward,ArrowUpward  } from "@material-ui/icons"
export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle"> Revenue </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,123</span>
                    <span className="featuredMoneyRate">-12.4 <ArrowDownward className="featuredIcon " /></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>
        
            <div className="featuredItem">
                <span className="featuredTitle"> Sales </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$10,003</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon" /></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle"> Cost </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,263</span>
                    <span className="featuredMoneyRate">+1.4 <ArrowUpward className="featuredIcon positive" /></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>

        </div>
    )
}
