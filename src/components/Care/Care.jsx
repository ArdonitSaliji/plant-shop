import React from 'react';
import './Care.scss';
import careImg from '../../assets/care.jpg';
import data from './Care';
const Care = () => {
    return (
        <section className='care-container'>
            <div className='care'>
                <div className='care-text'>
                    <h1>
                        How to care <br /> for plants
                    </h1>
                    <h3>Take care of plants with all your heart</h3>
                </div>
                <div className='adjust'>
                    {/* Svg to add linear gradient to icons */}
                    <svg width='0' height='0' style={{ position: 'absolute' }}>
                        <linearGradient id='blue-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
                            <stop stopColor='#27F09E' offset='20%' />
                            <stop stopColor='#03A5F3' offset='70%' />
                        </linearGradient>
                    </svg>

                    {data?.map((el, i) => (
                        <div key={i} className='adjust-content'>
                            <div className='content-icon'>
                                <el.icon
                                    style={
                                        el.svgStyle === 'fill'
                                            ? {
                                                  fill: 'url(#blue-gradient)',
                                              }
                                            : {
                                                  stroke: 'url(#blue-gradient)',
                                              }
                                    }
                                />
                            </div>
                            <div className='content-text'>
                                <h2>{el.heading}</h2>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='care-img'>
                <img src={careImg} alt='' />
            </div>
        </section>
    );
};

export default Care;
