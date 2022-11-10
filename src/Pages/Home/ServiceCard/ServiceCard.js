import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {

    const { _id, img, price, title, rating, description } = service;

    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl my-6">

            <PhotoProvider>
                <PhotoView src={img ? img : 'https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png'} >
                    <img src={img ? img : 'https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png'} alt="" />
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <div>
                    <p className='font-semibold text-xl text-sky-600'>Rating: {rating ? rating : 5}/5</p>
                </div>

                <div>
                    <p>{description.substring(0, 100)}...</p>
                </div>

                <div className="card-actions justify-between">
                    <p className='font-semibold text-2xl text-orange-600'>Price: {price ? price : 'TBA'}/BDT</p>
                    <Link to={`/services/${_id}`}>
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