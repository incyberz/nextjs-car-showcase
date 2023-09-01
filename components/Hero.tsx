"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  // const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Kingdom of Cars</h1>
        <p className="hero__subtitle">
          The Best Place to find, book, or rent Your Dream Cars!
        </p>
        {/* <CustomButton
          title="Explore Cars"
          styles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}

        <div className="hero__image-container">
          <div className="hero__image">
            <Image
              src="/hero-jaguar.png"
              alt="Your dream cars"
              fill
              className="object-contain"
            />
          </div>
          <div className="hero__image-overlay"></div>
        </div>
      </div>
    </div>
  );
}
