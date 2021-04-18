import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const Checkout = () => {

    const { register, handleSubmit, errors } = useForm();
    const { serviceId } = useParams();

    const [orderService, setOrderService] = useState({});
    console.log("service:",orderService);

    useEffect(() => {
        const url = `http://localhost:8000/ServiceProduct/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = (data) => {
        const allPlaceNewOrder = { ...loggedInUser, orderService, shipment: data, orderTime: new Date() }
        const url = 'http://localhost:8000/orderPlace';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allPlaceNewOrder)
        })
            .then(res => {
                alert("Order Place Successful!");
            })
    }

    return (

        <section className="mt-5 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <form className="admin-form designForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" className="form-control" placeholder="Enter Your Name" {...register('name')} />
                        <br />
                        <input name="email" className="form-control" placeholder="Enter Your Email" {...register('email')} />
                        <br />
                        <input name="address" className="form-control" placeholder="Enter Your Address" {...register('address')} />
                        <br />
                        <input name="phone" className="form-control" placeholder="Enter Your Phone" {...register('phone')} />
                        <br />
                        <input type="submit" className="submitBtn btn-info text-white" />
                    </form>
                </div>
                <div className="col-md-6">

                </div>
            </div>
        </section>

    );
};

export default Checkout;
