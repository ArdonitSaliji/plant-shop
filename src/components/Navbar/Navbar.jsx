import React from 'react';
import './Navbar.scss';
import { RiShoppingBagFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <header>
                <ul>
                    <li>
                        <a href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Shop</a>
                    </li>
                    <li>
                        <a href=''>About Us</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>
                <RiShoppingBagFill className='header-cart' />
            </header>

            <h1 className='navbar-title'>
                Bring Serenity to Your Place
                <br /> With Interior Plants
            </h1>
            <p className='navbar-text'>
                find your dream plant for you home decoration
                <br /> with us, and we will make it happen.
            </p>
            <div className='navbar-input'>
                <input type='text' placeholder='Search plant' />
                <FiSearch className='navbar-search' />
            </div>

            <div className='navbar-points'>
                <span className='navbar-point left1'></span>
                <span className='navbar-point left2'></span>

                <span className='navbar-point right'>
                    <span className='inner-point'>
                        <div className='product'>
                            <div className='product-desc'>
                                <h2>$65.00</h2>
                                <p>Dracena Fragnas</p>
                            </div>
                            <div className='product-arrow'></div>
                        </div>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default Navbar;
