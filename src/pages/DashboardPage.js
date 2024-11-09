import React from 'react';
import {Link} from "react-router-dom";
import '../sass/sassFiles/desktop/dashboardpage.scss'
import MyNavbarDesk from "../Components/Desktop/MyNavbarDesk";
import AdminSidebar from "../Components/Desktop/Admin/AdminSidebar";

const DashboardPage = () => {
    return (
        <div>
            <div className="desktop">
             <div className="leftsidebardash">
                 <MyNavbarDesk/>

             <AdminSidebar/>

             </div>
            {/*<div className="leftsidebardash">*/}
            {/*    <div className="menulist">*/}
            {/*        <ul>*/}
            {/*            <li><Link className={'active'} to="/dashboard">Dashboard</Link></li>*/}
            {/*            <li><Link to="/homepagedash">Homepage</Link> </li>*/}
            {/*            <li><Link to="/aboutpagedash">About Page</Link></li>*/}
            {/*            <li><Link to="/servicepagedash">Service Page</Link></li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
        </div>
    );
};

export default DashboardPage;