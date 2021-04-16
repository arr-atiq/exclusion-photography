import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <a href="/dashboard">Dashboard</a>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <a href="/home">Home</a>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/orderList" className="text-white">
                            <FontAwesomeIcon icon={faCalendar} /> <a href="/order">Order List</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <a href="/addService">Add Service</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <a href="/makeAdmin">Make Admin</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <a href="/manageServices">Manage Services</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/confirmBooking" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <a href="/confirmBooking">Confirm Booking</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookingList" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <a href="/bookingList">Booking List</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white" >
                            <FontAwesomeIcon icon={faCog} /> <a href="/review">Review</a>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;