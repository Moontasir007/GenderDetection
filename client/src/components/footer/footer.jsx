import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                    <a href=""><i className="fa-brands fa-square-twitter"></i></a>
                    <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                    <a href=""><i className="fa-brands fa-square-pinterest"></i></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <div className="row">
                    Copyright © 2023 GENDER - All rights reserved ||
                    Designed By: Moontasir Mamun
                </div>
            </div>
        </footer>
    );
};

export default Footer;
