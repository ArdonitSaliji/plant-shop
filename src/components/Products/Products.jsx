import React from 'react';
import Services from './Services';
import { BsArrowRight } from 'react-icons/bs';
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import './Products.scss';
import '../variables.scss';
import plant from '../../assets/plant.png';
import plant1 from '../../assets/plant2.png';
import plant2 from '../../assets/plant3.png';

const Products = () => {
    let arr = [plant, plant1, plant2];
    return (
        <section className='product-container'>
            <Services />

            <div className='products'>
                <div className='best-seller'>
                    <h1>
                        Best Seller <br /> Product
                    </h1>
                    <a href=''>
                        See all collection <BsArrowRight />
                    </a>
                </div>

                <div className='product-plants'>
                    {arr.map((img, i) => (
                        <div className='product-plant' key={i}>
                            <div className='plant-img'>
                                <img src={img} loading='lazy' alt='' />
                            </div>
                            <div className='plant'>
                                <div className='plant-desc'>
                                    <h1>Cammile</h1>
                                    <div className='plant-stars'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                                <div className='plant-price'>
                                    <h1>$65.00</h1>
                                    <div className='plant-plus'>
                                        <AiOutlinePlus />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
