import React from 'react';
import './Dashboard.css';
import Mainbar from '../Mainbar/Mainbar';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="dashboard-section">
            <div style={{margin:"0"}} className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <Mainbar></Mainbar>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;