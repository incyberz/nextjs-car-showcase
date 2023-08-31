"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

export default function CustomButton({
  title,
  styles,
  textStyles,
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
      {leftIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={leftIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
