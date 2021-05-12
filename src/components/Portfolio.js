import React from "react";

function Hero() {
    return (
        <div clasName="masthead d-flex" id="page-top">
            <div clasName="container text-center my-auto">
                <h1 clasName="mb-1">Bella Santiago</h1>
                <h3 clasName="mb-5">
                    <em>Aspiring Full-Stack Developer!</em>
                </h3>
                <button clasName="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</button>
            </div>
            <div clasName="overlay"></div>
        </div>
    );
};

export default Hero;