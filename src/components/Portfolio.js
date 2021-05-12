import React from "react";

function Hero() {
    return (
        <div className="content-section bg-light" id="Portfolio">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="content-section-heading text-center">
                            <h3 className="text-secondary mb-0">Portfolio</h3>
                            <h2 className="mb-5">Recent Projects</h2>
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://bencyna.github.io/Catch-Source-Style/" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
                                    </a>
                                </div>


                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://bellasantiago.github.io/day-scheduler/" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
                                    </a>
                                </div>

                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://arcane-waters-44478.herokuapp.com/" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
                                    </a>
                                </div>

                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://bellasantiago.github.io/hw-quiz/" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
                                    </a>
                                </div>

                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://bellasantiago.github.io/weatherDashboard" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-5.png" alt="" />
                                    </a>
                                </div>

                                <div className="col-lg-6">
                                    {/* eslint-disable-next-line */}
                                    <a className="portfolio-item" href="https://github.com/bellasantiago/budget-tracker" target="_blank">
                                        <img className="img-fluid" src="img/portfolio-6.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;