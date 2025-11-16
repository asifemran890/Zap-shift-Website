import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moon from "../../../assets/brands/moonstar.png";
import rand from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import starp from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandLogo = [amazon, amazonVector, casio, moon, rand, star, starp];

const Brands = () => {
  return (
    <div className="h-50 ">
      <h1 className="text-3xl font-bold mt-15 text-center">
        We've helped thousands of sales teams
      </h1>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {brandLogo.map((logo, index) => (
          <SwiperSlide key={index}>
            <img className="mt-10" src={logo} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
