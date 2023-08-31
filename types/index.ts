import { MouseEventHandler } from "react";

export interface CustomButtonProps{
  title: string,
  styles?: string,
  textStyles?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?:"button" | "submit" | "reset",
  rightIcon?:string,
  leftIcon?:string,
  isDisabled?:boolean,
}

export interface SearchManufacturerProps {
  manufacturer: string,
  setManufacturer: (manufacturer: string)=>void,
}

export interface CarProps{
  city_mpg: number,
  class: string,
  combination_mpg: number,
  cylinders: number,
  displacement: number,
  drive: string,
  fuel_type: string,
  highway_mpg: number,
  make: string,
  model: string,
  transmission: string,
  year: number
}

export interface SearchButtonProps{
  otherClasses:string
}