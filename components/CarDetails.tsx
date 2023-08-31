"use client";
import React, { Fragment } from "react";
import { CarProps } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

export interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
