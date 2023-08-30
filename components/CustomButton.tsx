"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
