import React from 'react';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="card">
                <img style={{width: "100%", height: "400px",  }} src={service.productUrl} alt="" />
                <h3 className="mt-3 text-warning">{service.name}</h3>
                <h5>{service.Description}</h5>
                <button className="btn btn-info text-white">Book Now</button>
            </div>
        </div>
    );
};

export default ServiceDetail;