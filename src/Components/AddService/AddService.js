import React, { useState } from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const [productUrl, setProductUrl] = useState(null);
    const onSubmit = data => {

        const productData = {
            name: data.name,
            Description: data.description,
            productUrl: productUrl
        }

        const url = `http://localhost:8000/addService`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(productData)
        })
            .then(res => {
                alert("Product added successfully")
            })
    }

    const handleImageChange = event => {
        const imageData = new FormData();
        imageData.set('key', '08b10d29ebe980b7653915a407c6fa7e');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setProductUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <section>
            <div className="row mt-5">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                <h3 className="text-center mt-5 text-danger">Add A Service!</h3>
                    <form className="admin-form designForm" onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" className="form-control" placeholder="Service Title" {...register('name')} />
                        <br/>
                        <input name="description" className="form-control" placeholder="Enter Description" {...register('description')} />
                        <br/>
                        <input name="ChooseAFile" className="form-control" type="file" onChange={handleImageChange} />
                        <br/>
                        <input type="submit" className="submitBtn btn-info text-white" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;