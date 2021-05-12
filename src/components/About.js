import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function About() {
    return (
        <div className="content-section bg-light" id="About">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h2>Hi, I'm Bella!</h2>
                        <p>
                            <div className="lead mb-5">
                                My journey started in Brazil, led me to the USA and has finally brought me home to Adelaide.<br></br><br></br>
                                ‍From Network Management Internship, CISCO short-courses and freelance Website Development, to direct involvement in purpose-built logistics software.‍Having worked in different industries for over 18 years, technology has always been the underlying passion. It seems like I was always involved in it, no matter what my title was.<br></br><br></br>
                                    Here, it was finally time to deepen my skills in Full-Stack Web Development and coding. <br></br><br></br>
                                        The passion became a new journey... </div>
                        </p>
                        <Link
                            to="Languages"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <button className="btn btn-dark btn-xl js-scroll-trigger" >See Languages</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;