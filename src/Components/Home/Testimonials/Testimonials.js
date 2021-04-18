import React, { useEffect, useState } from 'react';
import TestimonialsDetail from './TestimonialsDetail/TestimonialsDetail';

const Testimonials = () => {

    const [allReviews, setAllReviews] = useState([]);

    useEffect(() => {
        fetch('https://calm-crag-04570.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])

    return (
        <section className="container mt-5 pt-5">
            <div className="text-center mb-5">
                <h2 className="text-primary">Client Review</h2>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
            <div style={{margin:"0"}} className="row">
                {
                    allReviews.map((reviews) => <TestimonialsDetail reviews={reviews}></TestimonialsDetail>)
                }
            </div>
        </section>
    );
};

export default Testimonials;