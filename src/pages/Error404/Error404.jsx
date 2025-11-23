import React from "react";
import { Link } from "react-router";
import error from "../../assets/banner/error404.png";

export default function Error404() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5 h-[600px] bg-white/90  p-6">
      {/* Illustration */}
      <img
        src={error}
        alt="404 illustration"
        className="w-56 h-56 object-contain mb-6"
      />

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Error 404</h1>

      {/* Button */}
      <Link
        to="/"
        className="bg-lime-400 hover:bg-lime-500 transition px-6 py-2 rounded-xl text-slate-900 font-semibold shadow-sm"
      >
        Go Home
      </Link>
    </div>
  );
}
