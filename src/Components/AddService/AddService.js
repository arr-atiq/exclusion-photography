import React, { useState } from 'react';
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
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <form className="admin-form" onSubmit={handleSubmit(onSubmit)}>

                        <input name="name" placeholder="Service Title" {...register('name')} />
                        <input name="description" placeholder="Enter Description" {...register('description')} />
                        <input name="ChooseAFile" type="file" onChange={handleImageChange} />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;