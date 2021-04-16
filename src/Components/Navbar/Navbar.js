import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-primary bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Exclusions Photography</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item me-5">
                            <a class="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link" href="/services">Services</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link " href="dashboard">Dashboard</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link " href="/contact">Contact Us</a>
                        </li>
                        <li class="nav-item me-5">
                            <a class="nav-link bg-danger text-white" href="login">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;