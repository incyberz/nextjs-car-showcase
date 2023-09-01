"use client";
import { CarProps } from "@/types";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";
import { randomInt } from "crypto";

type CarCarsProps = {
  car: CarProps;
  carNo: number;
};

const CarCard = ({ car, carNo }: CarCarsProps) => {
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  // let randomCar = (1 + Math.floor(Math.random() * 4)).toString();
  let carNoMod4 = (1 + (carNo % 4)).toString();

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[33px] font-extrabold">
        <span className="self-start text-[15px] font-medium">$</span>
        <span>{carRent}</span>
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car, carNoMod4)}
          fill
          priority
          className="object-contain"
          alt="car type"
        />
      </div>

      <div className=" relative flex w-full mt-2">
        <div className=" flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              width="20"
              height="20"
              alt="steering wheel icon"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/tire.svg"} width="20" height="20" alt="tire icon" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={"/gas.svg"} width="20" height="20" alt="gas icon" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className=" car-card__btn-container">
          <CustomButton
            title="View more..."
            styles="w-full py-[17px] rounded-full bg-primary-blue text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
