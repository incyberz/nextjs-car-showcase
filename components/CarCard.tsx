import { CarProps } from "@/types";
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
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p>
        <span>Car Rent...</span>
      </p>
    </div>
  );
};

export default CarCard;
