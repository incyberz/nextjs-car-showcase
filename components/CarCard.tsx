import { CarProps } from "@/types";
import { calculateCarRent } from "@/utils";
import Image from "next/image";
import React from "react";

type CarCarsProps = {
  car: CarProps;
};

const CarCard = ({ car }: CarCarsProps) => {
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
          src={"/hero.png"}
          fill
          priority
          className="object-contain"
          alt="car type"
        />
      </div>
    </div>
  );
};

export default CarCard;
