import React from 'react';
import { useHistory } from 'react-router';

const ServiceDetail = (props) => {
    const {name, productUrl, Description, _id} = props.service;

    const history = useHistory();
    const handleClick = serviceId => {
        history.push(`/checkout/${serviceId}`);
    }
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="card">
                <img style={{width: "100%", height: "400px",  }} src={productUrl} alt="" />
                <h4 className="mt-3 text-warning">{name}</h4>
                <h5>{Description}</h5>
                <button onClick={()=>handleClick(_id)} className="btn btn-info text-white">Book Now</button>
            </div>
        </div>
    );
};

export default ServiceDetail;