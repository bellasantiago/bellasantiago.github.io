import React from "react";

function Portfolio() {
    return (
        <div className="content-section" id="portfolio">
            <div className="container">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Portfolio</h3>
                    <h2 className="mb-5">Recent Projects</h2>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://bencyna.github.io/Catch-Source-Style/">
                            <img className="img-fluid" src="img/portfolio-1.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://bellasantiago.github.io/day-scheduler/">
                            <img className="img-fluid" src="img/portfolio-3.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://arcane-waters-44478.herokuapp.com/">
                            <img className="img-fluid" src="img/portfolio-2.jpg" alt="" />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <a className="portfolio-item" href="https://bellasantiago.github.io/hw-quiz/">
                            <img className="img-fluid" src="img/portfolio-4.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;