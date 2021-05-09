import React from "react";

function About() {
    return (
        <div className="content-section bg-light" id="about">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Hi, I'm Bella!</h2>
                        <p>
                            <div className="lead mb-5">
                                My journey started in Brazil, led me to the USA and has finally brought me home to Adelaide.{"\n"}{"\n"}
                                ‍From Network Management Internship, CISCO short-courses and freelance Website Development, to direct involvement in purpose-built logistics software.‍Having worked in different industries for over 18 years, technology has always been the underlying passion. It seems like I was always involved in it, no matter what my title was.{"\n"}{"\n"}
                                    Here, it was finally time to deepen my skills in Full-Stack Web Development and coding. {"\n"}{"\n"}
                                        The passion became a new journey... </div>
                        </p>
                        <button className="btn btn-dark btn-xl js-scroll-trigger" href="#services">See Languages</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;