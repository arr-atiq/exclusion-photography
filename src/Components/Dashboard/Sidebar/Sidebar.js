import React, { useContext, useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faHome, faUserPlus, faUsers, faListUl } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook, faFileAlt, faListAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isPhotographer, setIsPhotographer] = useState(false);

    useEffect(() => {
        fetch('https://calm-crag-04570.herokuapp.com/isPhotographer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsPhotographer(data));
    }, [])

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2  py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/" >
                        <FontAwesomeIcon icon={faHome} /> <a href="/home">Home</a>
                    </Link>
                </li>
                {isPhotographer && <div>
                    <li>
                        <Link to="/orderList" >
                            <FontAwesomeIcon icon={faListUl} /> <a href="/order">Service List</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" >
                            <FontAwesomeIcon icon={faUsers} /> <a href="/addService">Add Service</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" >
                            <FontAwesomeIcon icon={faFileAlt} /> <a href="/makeAdmin">Make Admin</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageServices"  >
                            <FontAwesomeIcon icon={faUserPlus} /> <a href="/manageServices">Manage Services</a>
                        </Link>
                    </li>
                </div>}
                <li>
                    <Link to="/bookingList"  >
                        <FontAwesomeIcon icon={faListAlt} /> <a href="/bookingList">Booking List</a>
                    </Link>
                </li>
                <li>
                    <Link to="/review"  >
                        <FontAwesomeIcon icon={faAddressBook} /> <a href="/review">Review</a>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" style={{ color: "white" }}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;