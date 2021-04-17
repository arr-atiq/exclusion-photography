import React, { useEffect, useState } from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/allServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="container pt-5">
            <div className="text-center mb-5">
                <h2 className="text-primary">Our Services</h2>
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
            </div>
            <div style={{margin:"0"}} className="row">
                {
                    services.map((service) => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;