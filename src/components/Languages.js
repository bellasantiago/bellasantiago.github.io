import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function Languages() {
    return (
        <div className="content-section bg-primary text-white text-center" id="Languages">
            <div className="container">
                <div className="content-section-heading">
                    <h3 className="text-secondary mb-0">Experience In These</h3>
                    <h2 className="mb-5">Languages:</h2>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="fab fa-html5"></i>
                        </span>
                        <h4>
                            <strong>HTML</strong>
                        </h4>
                        <p>
                            <div className="text-faded mb-0">Responsive Designs!</div>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="fab fa-css3-alt"></i>
                        </span>
                        <h4>
                            <strong>CSS</strong>
                        </h4>
                        <p>
                            <div className="text-faded mb-0">Custom and Themed CSS Frameworks!</div>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="fab fa-js-square"></i>
                        </span>
                        <h4>
                            <strong>JavaScript</strong>
                        </h4>
                        <p>
                            <div className="text-faded mb-0">Interactive integrations!</div>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <i className="fas fa-server"></i>
                        </span>
                        <h4>
                            <strong>MySQL</strong>
                        </h4>
                        <p>
                            <div className="text-faded mb-0">Backend server with MySQL and NoSQL!</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;