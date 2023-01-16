import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, rating, description } = service;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl my-6">
      <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="mb-0 capitalize dark:text-gray-100"
            >
              {price}/= BDT
            </Link>
          </div>
          <Link to={`/services/${_id}`}>
            <button className="btn btn-outline border-none text-orange-600">
              <span className="m-2">Details</span> <FaArrowRight></FaArrowRight>
            </button>
          </Link>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <PhotoProvider>
              <PhotoView
                src={
                  img
                    ? img
                    : "https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png"
                }
              >
                <img
                  src={
                    img
                      ? img
                      : "https://i.ibb.co/XbSzsDS/16451874451570033394image1-min.png"
                  }
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
            <div className="flex items-center text-xs">
              <span>Rating: {rating}/5</span>
            </div>
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-cyan-400">
                {title}
              </h3>
            </Link>
            <p className="leading-snug dark:text-gray-400">
              {description.substring(0, 80)}...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
