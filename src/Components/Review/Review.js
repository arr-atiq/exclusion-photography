import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Review = () => {
    const { register, handleSubmit } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {

        // const productData = {
        //     name: data.name,
        //     Description: data.description,
        //     productUrl: productUrl
        // }
    }
    return (
        <section>
            <div className="row mt-5">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <h3 className="text-center mt-5 text-danger">Add Your Valuable Review!</h3>
                    <form className="admin-form designForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" className="form-control" placeholder="Service Title" {...register('name')} />
                        <br/>
                        <input name="designation" className="form-control" placeholder="Enter Designation" {...register('designation')} />
                        <br/>
                        <textarea name="description" className="form-control" placeholder="Enter Description" {...register('description')}></textarea>
                        <br/>
                        <input type="submit" className="submitBtn btn-info text-white" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;