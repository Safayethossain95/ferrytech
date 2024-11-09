/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useLocation,Link } from 'react-router-dom'
const AdminSidebar = () => {
    const location = useLocation();
    const [isJobEntryOpen, setJobEntryOpen] = useState(false);
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
                        <li>
                            <Link to="/admin">Dashboard</Link>
                        </li>
                        <li className={`drp ${isJobEntryOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleJobEntry}>
                                <Link>Homepage</Link>
                                <img
                                    style={
                                        isJobEntryOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="./assets/images/dashboard/admin/arrowdown.png"
                                    alt=""
                                />
                            </div>

                            <ul className="sub-list">
                                <li>
                                    <Link
                                        to="/admin"
                                        className={
                                            location.pathname == "/admin" ? "active" : ""
                                        }
                                    >
                                        Banner
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/adminmanage"
                                        className={
                                            location.pathname == "/adminmanage" ? "active" : ""
                                        }
                                    >
                                        Idustry Cards
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={`/messages/${userid}`}
                                        className={
                                            location.pathname == `/messages/${userid}` ? "active" : ""
                                        }
                                    >
                                        Messages
                                    </Link>
                                </li>
                            </ul>

                        </li>
                        <li className={`drp ${isHomepagedrpOpen ? "open" : ""}`}>
                            <div className="front" onClick={toggleHomeEntry}>
                                <Link>Home Page</Link>
                                <img
                                    style={
                                        isHomepagedrpOpen ? { transform: "rotate(180deg)" } : {}
                                    }
                                    src="./assets/images/dashboard/admin/arrowdown.png"
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
                                        Banner Edit
                                    </Link>
                                </li>
                                <li>
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
                                    src="./assets/images/dashboard/admin/arrowdown.png"
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