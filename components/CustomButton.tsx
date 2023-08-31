"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  title,
  styles,
  handleClick,
  btnType,
  rightIcon,
  leftIcon,
  isDisabled,
}: CustomButtonProps) {
  return (
    <button
      className={`custom-btn ${styles}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}
