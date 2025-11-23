import React from "react";
import img1 from "../../../assets/banner/live-tracking.png";
import img2 from "../../../assets/banner/safe-delivery.png";

export default function LiveParcel({
  title = "Live Parcel Tracking",
  description = `Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.`,
  title2 = "100% Safe Delivery",
  description2 = `We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.`,
  title3 = "24/7 Call Center Support",
  description3 = `Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.`,
}) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className=" p-6">
        <div className="bg-white/90 rounded-2xl shadow-sm p-6 flex items-center gap-6">
          {/* Left artwork */}
          <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
            <img
              src={img1}
              alt="live parcel tracking artwork"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Vertical dashed divider (responsive hide on very small screens) */}
          <div className="hidden sm:block h-32 border-r-2 border-dashed border-slate-200" />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-sky-800 mb-2">
              {title}
            </h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
      <div className=" p-6">
        <div className="bg-white/90 rounded-2xl shadow-sm p-6 flex items-center gap-6">
          {/* Left artwork */}
          <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
            <img
              src={img2}
              alt="live parcel tracking artwork"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Vertical dashed divider (responsive hide on very small screens) */}
          <div className="hidden sm:block h-32 border-r-2 border-dashed border-slate-200" />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-sky-800 mb-2">
              {title2}
            </h3>
            <p className="text-slate-600 leading-relaxed">{description2}</p>
          </div>
        </div>
      </div>
      <div className=" p-6">
        <div className="bg-white/90 rounded-2xl shadow-sm p-6 flex items-center gap-6">
          {/* Left artwork */}
          <div className="flex-shrink-0 w-40 h-40 flex items-center justify-center">
            <img
              src={img2}
              alt="live parcel tracking artwork"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
          </div>

          {/* Vertical dashed divider (responsive hide on very small screens) */}
          <div className="hidden sm:block h-32 border-r-2 border-dashed border-slate-200" />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-extrabold text-sky-800 mb-2">
              {title3}
            </h3>
            <p className="text-slate-600 leading-relaxed">{description3}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
