import React from 'react';

const TestimonialsDetail = (props) => {
    const {name, Designation, Description} = props.reviews.reviewData;
    const {photo} = props.reviews;
    console.log(photo);
    
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="card">
                <img style={{width: "100px", height: "100px",  }} src={photo} alt="" />
                <h3 className="mt-3 text-warning">{name}</h3>
                <h4>{Designation}</h4>
                <h5>{Description}</h5>
            </div>
        </div>
    );
};

export default TestimonialsDetail;