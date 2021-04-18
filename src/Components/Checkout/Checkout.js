import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {

    const { register, handleSubmit, errors } = useForm();
    const { serviceId } = useParams();
    const [orderService, setOrderService] = useState({});
    const [shippingData, setShippingData] = useState(null);

    useEffect(() => {
        const url = `https://calm-crag-04570.herokuapp.com/ServiceProduct/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = (data) => {
        setShippingData(data);
    }

    const handlePaymentSuccess = paymentId =>{
        const allPlaceNewOrder = { 
            ...loggedInUser,
             orderService,
              shipment: shippingData, 
              paymentId,
              orderTime: new Date() }
        const url = 'https://calm-crag-04570.herokuapp.com/orderPlace';
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
                <div style={{display: shippingData ? 'none': 'block'}} className="col-md-6">
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
                <div style={{display: shippingData ? 'block': 'none'}} className="col-md-6">
                    <h3>Please Confirm Your Payment</h3>
                    <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </section>

    );
};

export default Checkout;
