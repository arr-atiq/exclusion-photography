import React, { useEffect, useState } from 'react';
import './BookList.css';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import BookingListDetail from './BookingListDetail/BookingListDetail';

const BookingList = () => {

    const [booking, setBookingList] = useState([])
    useEffect(() => {
        const url = 'https://calm-crag-04570.herokuapp.com/allPlaceOrders';
        fetch(url)
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [])

    return (
        <div className="row mt-5">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-8 mt-5">
                <table id="table">
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Delete Order</th>
                    </tr>
                </table>
                {
                    booking.map(order => <BookingListDetail order={order}></BookingListDetail>)
                }
            </div>
        </div>
    );
};

export default BookingList;