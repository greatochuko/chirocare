import { services } from "@/components/ServiceSection";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col">
      <h1 className="pt-4 text-center text-lg font-semibold uppercase sm:text-xl md:text-2xl lg:text-3xl">
        Our Services
      </h1>
      {services.map((service, i) => (
        <div
          key={i}
          className={`py-6 sm:py-8 md:py-10 lg:py-12 ${i % 2 === 1 ? "bg-base-100" : ""}`}
        >
          <div
            className={`mx-auto flex w-[90%] max-w-7xl flex-col-reverse gap-4 sm:items-center sm:gap-6 ${i % 2 === 1 ? "sm:flex-row-reverse" : "sm:flex-row"}`}
          >
            <div className="flex flex-1 flex-col gap-4 sm:gap-6">
              <h2 className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
                {service.title}
              </h2>
              <p className="text-base-600 lg:text-lg">{service.description}</p>
              <button className="bg-accent hover:bg-accent-200 w-fit rounded-full px-6 py-2 text-white opacity-90 duration-200 hover:opacity-100">
                Book Now
              </button>
            </div>
            <div className="relative aspect-video flex-1 overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover"
                fill
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
