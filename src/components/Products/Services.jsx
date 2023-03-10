import React from 'react';
import { BsBoxSeam } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import './Products.scss';
import '../variables.scss';
const Services = () => {
    return (
        <div className='services'>
            <div className='service'>
                {/* This svg creates a linear gradient */}
                <svg width='0' height='0' style={{ position: 'absolute' }}>
                    <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
                        <stop stopColor='#27F09E' offset='20%' />
                        <stop stopColor='#03A5F3' offset='70%' />
                    </linearGradient>
                </svg>
                {/* Then applies it to the icons */}
                <BsBoxSeam style={{ fill: 'url(#blue-gradient)' }} />

                <div className='service-desc'>
                    <h2>Free Shipping</h2>
                    <p>No charge for each delivery</p>
                </div>
            </div>
            <div className='service'>
                <FaWallet style={{ fill: 'url(#blue-gradient)' }} />
                <div className='service-desc'>
                    <h2>Quick Payment</h2>
                    <p>100% secure payment</p>
                </div>
            </div>
            <div className='service'>
                <BiSupport style={{ fill: 'url(#blue-gradient)' }} />

                <div className='service-desc'>
                    <h2>24/7 Support</h2>
                    <p>Quick support</p>
                </div>
            </div>
        </div>
    );
};

export default Services;
