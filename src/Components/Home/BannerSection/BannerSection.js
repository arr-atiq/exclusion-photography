import React from 'react';
import banner from '../../../Images/banner.jpg';

const BannerSection = () => {
    return (
        <section className="banner-section d-flex justify-content-center">
            <div className="container row mt-5 pt-5">
                <div className="col-md-6 text-center mt-5 pt-5">
                    <h2>Capturing the moments <br/>That captivate your heart</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis tempora debitis reiciendis error tempore delectus, incidunt at pariatur, recusandae fugiat unde sit sint quos.</p>
                    <button className="btn btn-primary">Hire Me</button>
                </div>
                <div className="col-md-6">
                    <img src={banner} className="img-fluid" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;