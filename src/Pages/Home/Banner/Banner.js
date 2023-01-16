import React from "react";
import img1 from "../../../Assets/banner/banner1.jpg";
import img2 from "../../../Assets/banner/banner2.jpg";
import img3 from "../../../Assets/banner/banner3.jpg";

import BannerCarousel from "./BannerCarousel";

const bannerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="carousel min-w-2xl py-10">
      {bannerData.map((slide) => (
        <BannerCarousel key={slide.id} slide={slide}></BannerCarousel>
      ))}
    </div>
  );
};

export default Banner;
