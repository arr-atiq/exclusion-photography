import React from 'react';

const BookingListDetail = (props) => {
    const {orderService} = props.order;
    const {address}=props.order.shipment;
    return (
        <div>
            <table id="table">
                <tr>
                    <td>{orderService.name}</td>
                    <td><img style={{width:"50px"}} src={orderService.productUrl} alt=""/></td>
                    <td>{orderService.price}</td>
                    <td>{address}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default BookingListDetail;


