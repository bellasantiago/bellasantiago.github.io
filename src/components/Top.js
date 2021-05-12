import React from "react";
// eslint-disable-next-line
import { Link, animateScroll as scroll } from "react-scroll";

function Top() {
    return (

        <div className="masthead">
            <div className="container text-center">
                <br></br><br></br><br></br>
                <h1 className="mx-auto mb-5">Bella Santiago</h1>
                <h3 clasName="mb-5">
                    <em>Aspiring Full-Stack Developer!</em>
                </h3>
                <Link
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    <button className="btn btn-primary btn-xl" >
                        Find Out More
                    !</button>
                </Link>

            </div>
        </div>

    );
};

export default Top;