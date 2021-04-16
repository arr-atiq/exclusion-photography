import React from 'react';
import metropoliton from '../../../Images/portfolio/metropoliton.jpg';
import interior from '../../../Images/portfolio/interior (2).jpg';
import weeding from '../../../Images/portfolio/weeding3.jpg';
import portrait from '../../../Images/portfolio/portrait (2).jpg';
import travel from '../../../Images/portfolio/travel (1).jpg';
import product from '../../../Images/portfolio/product (1).jpg';
import PortfolioDetail from './PortfolioDetail/PortfolioDetail';


const portfolioData = [
    {
        name: 'Best Metropolitan Photography',
        img: metropoliton,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'World Class Interior',
        img: interior,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'Weeding Shot in Temple',
        img: weeding,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'World Class Portrait',
        img: portrait,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'World Travel Capturing',
        img: travel,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'Commercial Product',
        img: product,
        location: 'Dhaka, Bangladesh'
    }
    ,
    {
        name: 'World Class Interior',
        img: interior,
        location: 'Dhaka, Bangladesh'
    },
    {
        name: 'Weeding Shot in Temple',
        img: weeding,
        location: 'Dhaka, Bangladesh'
    }
]
const Portfolio = () => {
    return (
        <div style={{ margin: '0' }} className="row mt-5 mb-5 pt-5 text-center">
            <div className="info-tag text-center mb-5">
                <h2 className="text-primary">Our Portfolio</h2>
                <h4>The Latest Photography Till Now</h4>
            </div>
            {
                portfolioData.map(portfolio => <PortfolioDetail workSample={portfolio}></PortfolioDetail>)
            }
        </div>
    );
};

export default Portfolio;