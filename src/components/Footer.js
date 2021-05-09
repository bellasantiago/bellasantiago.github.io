import React from "react";

function Footer() {
    return (
        <footer class="footer text-center">
            <div class="container">
                <ul class="list-inline mb-5">
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="mailto:bellasantiago.adl@gmail.com">
                            <i class="fas fa-envelope-open-text"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/bellasantiago/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="social-link rounded-circle text-white" href="https://github.com/bellasantiago">
                            <i class="icon-social-github"></i>
                        </a>
                    </li>
                </ul>
                <p class="text-muted small mb-0">Copyright &copy; Bella Santiago 2021</p>
            </div>
        </footer>
    );
};

export default Footer;