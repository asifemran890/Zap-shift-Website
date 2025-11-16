import React from "react";
import Icon from "../../../assets/banner/bookingIcon.png";
const steps = [
  {
    title: "Booking Pick & Drop",
    desc: "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    desc: "We ensure your packages reach their destination quickly & safely.",
  },
  {
    title: "Delivery Hub",
    desc: "Stay updated with real-time status and tracking notifications.",
  },
  {
    title: "Booking SME & Corporate",
    desc: "We handle your packages with care using secure packaging methods.",
  },
];

const HomeWork = () => {
  return (
    <div className="lg:h-[400px] ">
      <h1 className="text-3xl font-bold mb-5">How it Works</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
        {steps.map((item) => (
          <div className="card w-75 bg-base-100 h-[200px] p-8  card-xl shadow-sm">
            <img src={Icon} className="h-[56px] w-[56px]" alt="img" />
            <div>
              <h2 className=" text-xl font-bold mt-1">{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
