import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ServiceListDetail from './ServiceListDetail/ServiceListDetail';

const ServiceList = () => {
    const [serviceList, setServiceList] = useState([])
    useEffect(() => {
        const url = 'http://localhost:8000/allServices';
        fetch(url)
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
                <table id="table">
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Delete Order</th>
                    </tr>
                </table>
                {
                    serviceList.map(serviceListItem => <ServiceListDetail serviceList={serviceListItem}></ServiceListDetail>)
                }
            </div>
        </div>
    );
};

export default ServiceList;