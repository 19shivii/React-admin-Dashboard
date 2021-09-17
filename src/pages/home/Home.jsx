import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Charts from "../../components/charts/Charts"
import "./home.css"
import {userData} from "../../dummydata"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Charts data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homewidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    );
}
