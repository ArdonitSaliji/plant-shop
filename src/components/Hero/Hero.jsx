import React, { useEffect } from 'react';
import './Hero.scss';
import { RiShoppingBagFill } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';

const Hero = () => {
    let addClass = (e) => {
        e.target.firstChild.firstChild.classList.add('show');
    };
    let removeClass = (e) => {
        e.target.firstChild.firstChild.classList.remove('show');
    };
    return (
        <section className='hero-container'>
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

            <h1 className='hero-title'>
                Bring Serenity to Your Place
                <br /> With Interior Plants
            </h1>
            <p className='hero-text'>
                find your dream plant for you home decoration
                <br /> with us, and we will make it happen.
            </p>
            <div className='hero-input'>
                <input type='text' placeholder='Search plant' />
                <FiSearch className='hero-search' />
            </div>

            <div className='hero-points'>
                <span
                    onMouseEnter={(e) => addClass(e)}
                    onMouseLeave={(e) => removeClass(e)}
                    className='hero-point left1'
                >
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
                <span
                    onMouseEnter={(e) => addClass(e)}
                    onMouseLeave={(e) => removeClass(e)}
                    className='hero-point left2'
                >
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

                <span
                    onMouseEnter={(e) => addClass(e)}
                    onMouseLeave={(e) => removeClass(e)}
                    className='hero-point right'
                >
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
        </section>
    );
};

export default Hero;
