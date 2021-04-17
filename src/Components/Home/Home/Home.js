import React from 'react';
import BannerSection from '../BannerSection/BannerSection';
import Footer from '../Footer/Footer';
import Portfolio from '../Portfolio/Portfolio';
import ProjectCounter from '../ProjectCounter/ProjectCounter';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <Portfolio></Portfolio>
            <Services></Services>
            <Testimonials></Testimonials>
            <ProjectCounter></ProjectCounter>
            <Footer></Footer>
        </div>
    );
};

export default Home;