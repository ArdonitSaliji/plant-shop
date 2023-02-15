import React from 'react';
import './Reference.scss';
import res2 from '../../assets/res1.jpg';
import res1 from '../../assets/res2.avif';
import res3 from '../../assets/res3.jpg';

const Reference = () => {
    return (
        <section className='reference-container'>
            <div className='reference-text'>
                <h1>Interior Plant Reference</h1>
                <p>make your home so comfortable with refreshing plants</p>
            </div>
            <div className='reference-images'>
                <div className='left'>
                    <img src={res1} alt='' />
                    <img src={res3} alt='' />
                </div>
                <div className='right'>
                    <img src={res2} alt='' />
                </div>
            </div>
        </section>
    );
};

export default Reference;
