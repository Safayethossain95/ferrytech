/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */

import React, {  useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
const AdminSidebar = () => {
    const location = useLocation();
    const [isJobEntryOpen, setJobEntryOpen] = useState(true);
    const [isstudentdrpOpen, setisstudentdrpOpen] = useState(false);
    const [isHomepagedrpOpen, setisHomepagedrpOpen] = useState(false);

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
                                        to={`/dashboard/partner-brands`}
                                        className={
                                            location.pathname == `/dashboard/partner-brands` ? "active" : ""
                                        }
                                    >
                                        Partner Brands
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
                                        to="/banneredit"
                                        className={
                                            location.pathname == "/banneredit" ? "active" : ""
                                        }
                                    >
                                        Brand slider Images
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/featuresedit"
                                        className={
                                            location.pathname == "/featuresedit" ? "active" : ""
                                        }
                                    >
                                        Request a Quote
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={`/faqedit`}
                                        className={
                                            location.pathname == `/faqedit` ? "active" : ""
                                        }
                                    >
                                        FAQ Edit
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        <li className={`drp ${isstudentdrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleStudentEntry}>
                                <Link>Student Management</Link>
                                <img
                                    style={
                                        isstudentdrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="/assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                                <li>
                                    <Link
                                        to="/quizmarks"
                                        className={
                                            location.pathname == "/quizmarks" ? "active" : ""
                                        }
                                    >
                                        Students Info
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/newstudententry"
                                        className={
                                            location.pathname == "/newstudententry" ? "active" : ""
                                        }
                                    >
                                        Student Entry
                                    </Link>
                                </li>
                                {/* <li>
                      <Link
                        to="/featuresedit"
                        className={
                          location.pathname == "/featuresedit" ? "active" : ""
                        }
                      >
                        Features Edit
                      </Link>
                    </li>

                    <li>
                  <Link
                    to={`/faqedit`}
                    className={
                      location.pathname == `/faqedit` ? "active" : ""
                    }
                  >
                    FAQ Edit
                  </Link>
                </li> */}
                            </ul>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSidebar