import "./sidebar.css"
import {LineStyle,Timeline,Report,CreditCardOutlined,WorkOutline,MailOutline,DynamicFeed,ChatBubbleOutline,AttachMoneySharp,StorefrontOutlined,PersonOutlineOutlined,BarChartOutlined} from "@material-ui/icons"
export default function Sidebar() {
    return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Dashboard</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem active">
                                    <LineStyle className="sidebarIcon"/>
                                    Home
                                </li>
                                <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analytics
                                </li>
                                <li className="sidebarListItem">
                                    <CreditCardOutlined className="sidebarIcon"/>
                                    Sales
                                </li>
                            </ul>       
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Staff</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem ">
                                    <PersonOutlineOutlined className="sidebarIcon"/>
                                    Users
                                </li>
                                <li className="sidebarListItem">
                                    <StorefrontOutlined className="sidebarIcon"/>
                                    Products
                                </li>
                                <li className="sidebarListItem">
                                    <AttachMoneySharp className="sidebarIcon"/>
                                    Transactions
                                </li>
                                <li className="sidebarListItem">
                                    <BarChartOutlined className="sidebarIcon"/>
                                    Reports
                                </li>
                            </ul>       
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Notification</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem">
                                    <MailOutline className="sidebarIcon"/>
                                    Mail
                                </li>
                                <li className="sidebarListItem">
                                    <DynamicFeed className="sidebarIcon"/>
                                    Feedback
                                </li>
                                <li className="sidebarListItem">
                                    <ChatBubbleOutline className="sidebarIcon"/>
                                    Messages
                                </li>
                            </ul>       
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                            <ul className="sidebarList">
                                <li className="sidebarListItem ">
                                    <WorkOutline className="sidebarIcon"/>
                                    Manage
                                </li>
                                <li className="sidebarListItem">
                                    <Timeline className="sidebarIcon"/>
                                    Analytics
                                </li>
                                <li className="sidebarListItem">
                                    <Report className="sidebarIcon"/>
                                    Reports
                                </li>
                            </ul>       
                    </div>
                </div>
            </div>
    )
}
