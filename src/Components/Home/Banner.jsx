import React from "react";

const Banner = () => {
  return (
    <div className="w-full py-3 px-4 text-sm font-medium text-green-800 bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF]">
      <div className="max-w-7xl mx-auto text-center">
        <span className="inline-block px-3 py-1 mr-2 rounded-lg bg-green-600 text-white text-xs">
          New
        </span>
        <span>AI Feature Added</span>
      </div>
    </div>
  );
};

export default Banner;
