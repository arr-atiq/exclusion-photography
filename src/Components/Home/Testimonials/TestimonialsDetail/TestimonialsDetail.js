import React from 'react';

const TestimonialsDetail = (props) => {
    const { name, designation, description } = props.reviews.reviewData;
    const { photo } = props.reviews;
    console.log(photo);

    return (
        <div className="col-md-4 mb-5 mt-5">
            <div className="card p-4">
                <div className="d-flex">
                    <img style={{ width: "100px", height: "100px", borderRadius:"50px"}} src={photo} alt="" />
                    <div className="clientInfo ms-3">
                        <h5 className="mt-3 text-warning">{name}</h5>
                        <h6>{designation}</h6>
                    </div>
                </div>
                <p className="text-center mt-4">{description}</p>
            </div>
        </div>
    );
};

export default TestimonialsDetail;