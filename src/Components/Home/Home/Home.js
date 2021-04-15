import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BannerSection></BannerSection>
            <Portfolio></Portfolio>
            <Services></Services>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;