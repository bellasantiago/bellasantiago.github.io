import React from "react";

function Languages() {
    return (
        <div clasName="content-section bg-primary text-white text-center" id="services">
            <div clasName="container">
                <div clasName="content-section-heading">
                    <h3 clasName="text-secondary mb-0">Experience In These</h3>
                    <h2 clasName="mb-5">Languages:</h2>
                </div>
                <div clasName="row">
                    <div clasName="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span clasName="service-icon rounded-circle mx-auto mb-3">
                            <i clasName="fab fa-html5"></i>
                        </span>
                        <h4>
                            <strong>HTML</strong>
                        </h4>
                        <p>
                            <div clasName="text-faded mb-0">Responsive Designs!</div>
                        </p>
                    </div>
                    <div clasName="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span clasName="service-icon rounded-circle mx-auto mb-3">
                            <i clasName="fab fa-css3-alt"></i>
                        </span>
                        <h4>
                            <strong>CSS</strong>
                        </h4>
                        <p>
                            <div clasName="text-faded mb-0">Custom and Themed CSS Frameworks!</div>
                        </p>
                    </div>
                    <div clasName="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span clasName="service-icon rounded-circle mx-auto mb-3">
                            <i clasName="fab fa-js-square"></i>
                        </span>
                        <h4>
                            <strong>JavaScript</strong>
                        </h4>
                        <p>
                            <div clasName="text-faded mb-0">Interactive integrations!</div>
                        </p>
                    </div>
                    <div clasName="col-lg-3 col-md-6">
                        <span clasName="service-icon rounded-circle mx-auto mb-3">
                            <i clasName="fas fa-server"></i>
                        </span>
                        <h4>
                            <strong>MySQL</strong>
                        </h4>
                        <p>
                            <div clasName="text-faded mb-0">Backend server with MySQL and NoSQL!</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;