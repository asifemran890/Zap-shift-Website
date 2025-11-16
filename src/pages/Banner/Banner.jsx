import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerimg1 from "../../assets/banner/banner1.png";
import bannerimg2 from "../../assets/banner/banner2.png";
import bannerimg3 from "../../assets/banner/banner3.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Banner = () => {
  return (
    <Carousel autoPlay={true} className="mt-5">
      <div className="static">
        <img src={bannerimg1} />
        <button className=" absolute bottom-20 p-2 rounded-3xl left-20 bg-[#CAEB66]">
          Track Your Parcel
        </button>
        <button className="absolute bottom-20 p-3 w-full   left-55">
          <BsArrowUpRightCircleFill />
        </button>

        <button className=" absolute bottom-20 p-2 rounded-3xl left-65 bg-[#DADADA]">
          Be A Rider
        </button>
      </div>
      <div>
        <img src={bannerimg2} />
        <button className=" absolute bottom-20 p-2 rounded-3xl left-20 bg-[#CAEB66]">
          Track Your Parcel
        </button>
        <button className="absolute bottom-20 p-3 w-full   left-55">
          <BsArrowUpRightCircleFill />
        </button>

        <button className=" absolute bottom-20 p-2 rounded-3xl left-65 bg-[#DADADA]">
          Be A Rider
        </button>
      </div>
      <div>
        <img src={bannerimg3} />
        <button className=" absolute bottom-20 p-2 rounded-3xl left-20 bg-[#CAEB66]">
          Track Your Parcel
        </button>
        <button className="absolute bottom-20 p-3 w-full   left-55">
          <BsArrowUpRightCircleFill />
        </button>

        <button className=" absolute bottom-20 p-2 rounded-3xl left-65 bg-[#DADADA]">
          Be A Rider
        </button>
      </div>
    </Carousel>
  );
};

export default Banner;
