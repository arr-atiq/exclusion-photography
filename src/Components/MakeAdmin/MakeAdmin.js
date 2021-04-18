import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const newAdminData = {
            adminData: data
        }
        const url = `https://calm-crag-04570.herokuapp.com/makeAdmin`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(newAdminData)
        })
            .then(res => {
                alert("Admin added successfully")
            })
    }
    return (
        <section>
            <div className="row mt-5">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3 className="text-center mt-5 text-danger">Add Another Admin!</h3>
                    <form className="admin-form designForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" className="form-control" placeholder="Your Name" {...register('name')} />
                        <br />
                        <input name="email" className="form-control" placeholder="Enter Your Email" {...register('email')} />
                        <br />
                        <input type="submit" className="submitBtn btn-info text-white" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default MakeAdmin;