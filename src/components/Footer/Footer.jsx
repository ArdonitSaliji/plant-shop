import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className='footer-nav'>
                <div className='footer-newsletter'>
                    <h1>Newsletter</h1>
                    <div className='subscribe'>
                        <input type='email' placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className='footer-links'>
                    <div className='footer-link'>
                        <h2>Support</h2>
                        <a href=''>About us</a>
                        <a href=''>Careers</a>
                        <a href=''>Blog</a>
                    </div>
                    <div className='footer-link'>
                        <h2>Useful Link</h2>
                        <a href=''>Payment & Tax</a>
                        <a href=''>Team of service</a>
                        <a href=''>Privacy and Policy</a>
                    </div>
                    <div className='footer-link'>
                        <h2>Our Menu</h2>
                        <a href=''>Best Products</a>
                        <a href=''>Category</a>
                    </div>
                    <div className='footer-link'>
                        <h2>Address</h2>
                        <p>
                            Address No. xxx Name, City <br /> Address, Country
                        </p>
                        <p>johndoe@gmail.com</p>
                    </div>
                </div>
            </div>
            <hr />
            <h3 className='copyright'>&copy; 2023 Plant Shop - All Rights Reserved.</h3>
        </footer>
    );
};

export default Footer;
