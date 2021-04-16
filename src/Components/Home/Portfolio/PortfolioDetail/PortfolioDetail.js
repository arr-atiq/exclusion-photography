import React from 'react';

const PortfolioDetail = ({ workSample }) => {
    return (
        <div className="col-md-3">
            <img style={{width:"300px",height:"320px"}} src={workSample.img} alt="" />
            <div className="workInfo text-center mt-2">
                <h5>{workSample.name}</h5>
                <p><small>{workSample.location}</small></p>
            </div>
        </div>
    );
};

export default PortfolioDetail;