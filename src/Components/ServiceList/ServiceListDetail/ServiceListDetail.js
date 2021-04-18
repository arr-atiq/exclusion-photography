import React from 'react';

const ServiceListDetail = (props) => {
    const {name, price} = props.serviceList;
    return (
        <div>
            <table id="table">
                <tr>
                    <td>{name}</td>
                    <td>${price}</td>
                    <td>
                        <button class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ServiceListDetail;