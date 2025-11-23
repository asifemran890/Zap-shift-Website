import React from "react";

// AboutUs.jsx
// Clean, responsive React component styled with Tailwind.
// Screenshot reference image stored at: /mnt/data/Screenshot_37.png

export default function About() {
  return (
    <div className="max-w-7xl mt-5 mb-5 mx-auto bg-white/90 rounded-2xl p-10 shadow-sm">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-sky-800 mb-3">About Us</h1>
      <p className="text-slate-600 max-w-2xl leading-relaxed">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

      <hr className="my-8 border-slate-200" />

      {/* Tabs */}
      <div className="flex gap-10 text-lg font-semibold text-slate-600 mb-6">
        <button className="text-green-700">Story</button>
        <button className="hover:text-sky-800 transition">Mission</button>
        <button className="hover:text-sky-800 transition">Success</button>
        <button className="hover:text-sky-800 transition">Team & Others</button>
      </div>

      {/* Content paragraphs */}
      <div className="space-y-6 text-slate-600 leading-relaxed">
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
        <p>
          We started with a simple promise — to make parcel delivery fast,
          reliable, and stress-free. Over the years, our commitment to real-time
          tracking, efficient logistics, and customer-first service has made us
          a trusted partner for thousands. Whether it's a personal gift or a
          time-sensitive business delivery, we ensure it reaches its destination
          — on time, every time.
        </p>
      </div>
    </div>
  );
}
