/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {  useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
import '../../../sass/sassFiles/desktop/dashboardpage.scss'
const AdminSidebar = () => {
    const location = useLocation();
    const [isJobEntryOpen, setJobEntryOpen] = useState(true);
    const [isstudentdrpOpen, setisstudentdrpOpen] = useState(true);
    const [isHomepagedrpOpen, setisHomepagedrpOpen] = useState(true);
    const [isAboutpagedrpOpen, setisAboutpagedrpOpen] = useState(true);
    const [isProductpagedrpOpen, setisProductpagedrpOpen] = useState(true);
    const [isServicepagedrpOpen, setisServicepagedrpOpen] = useState(true);

    const toggleServiceEntry = () => {
        setisServicepagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleProductEntry = () => {
        setisProductpagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleAboutEntry = () => {
        setisAboutpagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleJobEntry = () => {
        setJobEntryOpen((prevOpen) => !prevOpen);
    };
    const toggleHomeEntry = () => {
        setisHomepagedrpOpen((prevOpen) => !prevOpen);
    };
    const toggleStudentEntry = () => {
        setisstudentdrpOpen((prevOpen) => !prevOpen);
    };
    const [userid,setuserid] = useState("")
    // const {myApi} = useContext(MyContext)
    // useEffect(() => {
    //     const mail = localStorage.getItem("user");
    //     async function getuser() {
    //         try {
    //             const response2 = await axios.get(`${myApi}/api/getuser/${mail}`);
    //             setuserid(response2.data.data._id);
    //         } catch (err) {
    //             console.log(err.message);
    //         }
    //     }
    //     getuser();
    // }, []);
    return (
        <>
            <div className="sidebar_ad">
                <div className="sidebarcomp">
                    <ul>
                        <li>
                            <Link to="/dashboard/signup">Add New User</Link>
                        </li>
                        <li className={`drp ${isJobEntryOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleJobEntry}>
                                <Link>Home page</Link>
                                <img
                                    style={
                                        isJobEntryOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                                <li>
                                    <Link
                                        to="/dashboard"
                                        className={
                                            location.pathname == "/dashboard" ? "active" : ""
                                        }
                                    >
                                        Banner
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/introcomp`}
                                        className={
                                            location.pathname == `/dashboard/introcomp` ? "active" : ""
                                        }
                                    >
                                       Intro Comp
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link
                                        to="/dashboard/industrycards"
                                        className={
                                            location.pathname == "/dashboard/industrycards" ? "active" : ""
                                        }
                                    >
                                        Idustry Cards
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/product-line`}
                                        className={
                                            location.pathname == `/dashboard/product-line` ? "active" : ""
                                        }
                                    >
                                        Product Line
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/partner-brands`}
                                        className={
                                            location.pathname == `/dashboard/partner-brands` ? "active" : ""
                                        }
                                    >
                                        Partner Brands
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/whyferrytech`}
                                        className={
                                            location.pathname == `/dashboard/whyferrytech` ? "active" : ""
                                        }
                                    >
                                        
                                        Why Ferrytech
                                    </Link>
                                </li>
                                
                            </ul>

                        </li>
                        <li className={`drp ${isAboutpagedrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleAboutEntry}>
                                <Link>About Page</Link>
                                <img
                                    style={
                                        isAboutpagedrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                               
                               
                                <li>
                                    <Link
                                        to={`/dashboard/aboutpage`}
                                        className={
                                            location.pathname == `/dashboard/aboutpage` ? "active" : ""
                                        }
                                    >
                                        AboutPage Edit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/bod`}
                                        className={
                                            location.pathname == `/dashboard/bod` ? "active" : ""
                                        }
                                    >
                                        Board of Directors
                                    </Link>
                                </li>

                                
                            </ul>

                        </li>
                        <li className={`drp ${isProductpagedrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleProductEntry}>
                                <Link>Product Page</Link>
                                <img
                                    style={
                                        isAboutpagedrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                               
                               
                                <li>
                                    <Link
                                        to={`/dashboard/productpage`}
                                        className={
                                            location.pathname == `/dashboard/productpage` ? "active" : ""
                                        }
                                    >
                                        Product Page Edit
                                    </Link>
                                </li>

                                
                            </ul>

                        </li>
                        <li className={`drp ${isServicepagedrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleServiceEntry}>
                                <Link>Service Page</Link>
                                <img
                                    style={
                                        isAboutpagedrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                               
                               
                                <li>
                                    <Link
                                        to={`/dashboard/servicemaintext`}
                                        className={
                                            location.pathname == `/dashboard/servicemaintext` ? "active" : ""
                                        }
                                    >
                                        Service Main Text
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/servicepage`}
                                        className={
                                            location.pathname == `/dashboard/servicepage` ? "active" : ""
                                        }
                                    >
                                        Service Page Edit
                                    </Link>
                                </li>

                                
                            </ul>

                        </li>
                        <li className={`drp ${isHomepagedrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleHomeEntry}>
                                <Link>Common Components</Link>
                                <img
                                    style={
                                        isHomepagedrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                               
                               
                                <li>
                                    <Link
                                        to={`/dashboard/navbar`}
                                        className={
                                            location.pathname == `/dashboard/navbar` ? "active" : ""
                                        }
                                    >
                                        Navbar Edit
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/dashboard/contact`}
                                        className={
                                            location.pathname == `/dashboard/contact` ? "active" : ""
                                        }
                                    >
                                        Contact Info
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={`/dashboard/faqedit`}
                                        className={
                                            location.pathname == `/dashboard/faqedit` ? "active" : ""
                                        }
                                    >
                                        FAQ Edit
                                    </Link>
                                </li>
                            </ul>

                        </li>
                   
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar