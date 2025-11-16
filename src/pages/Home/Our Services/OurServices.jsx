import React from "react";
import Icon from "../../../assets/banner/service.png";

const services = [
  {
    title: "Express & Standard Delivery",
    desc: "We deliver parcels within 24–72 hours in Dhaka, Chattogram, Sylhet, Khulna, and Rajshahi.",
  },
  {
    title: "Nationwide Delivery",
    desc: "We deliver parcels nationwide with home delivery in every district, ensuring products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    desc: "We offer customized services with inventory management, online order processing, packaging, and after-sales support.",
  },
  {
    title: "Cash on Home Delivery",
    desc: "100% cash on delivery anywhere in Bangladesh with guaranteed product safety.",
  },
  {
    title: "Corporate Service / Contract in Logistics",
    desc: "Customized corporate services including warehouse and inventory management.",
  },
  {
    title: "Parcel Return",
    desc: "Reverse logistics for customers to return or exchange their products with online merchants.",
  },
];

const OurSection = () => {
  return (
    <div className="w-full bg-[#013B2F] py-16 px-4 rounded-xl">
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-gray-200 max-w-lg mx-auto">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal to business shipments — we deliver on time,
          every time.
        </p>

        {/* Services Grid */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          mt-10
        "
        >
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 shadow-lg transition transform hover:-translate-y-1 hover:bg-[#caeb66]
                ${item.highlight ? "bg-white" : "bg-white"}
              `}
            >
              <img
                src={Icon}
                alt="service icon"
                className="h-14 w-14 mx-auto mb-4"
              />

              <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>

              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSection;
