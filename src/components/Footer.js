import React from "react";

function Footer() {
    return (
        <footer className="footer text-center">
            <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="mailto:bellasantiago.adl@gmail.com">
                            <i className="fas fa-envelope-open-text"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="https://www.linkedin.com/in/bellasantiago/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="social-link rounded-circle text-white" href="https://github.com/bellasantiago">
                            <i className="icon-social-github"></i>
                        </a>
                    </li>
                </ul>
                <p>
                    <div className="text-muted small mb-0">Copyright &copy; Bella Santiago 2021</div>
                </p>
            </div>
        </footer>
    );
};

export default Footer;