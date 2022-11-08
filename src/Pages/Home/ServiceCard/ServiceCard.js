import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, rating, description } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-6">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div>
                    <p className='font-semibold text-xl text-sky-600'>Rating: {rating}/5</p>
                </div>

                <div>
                    <p>{description.substring(0, 100)}...</p>
                </div>

                <div className="card-actions justify-between">
                    <p className='font-semibold text-2xl text-orange-600'>Price: {price}/BDT</p>
                    <Link to={`/serviceDetails/${_id}`}>
                        <button className="btn btn-circle btn-outline border-none text-orange-600">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ServiceCard;