import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import Link from "next/link";

import companyInformation from "@/data";

export default function ServiceSection() {
  return (
    <section className="mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-4 py-8 sm:gap-6 sm:py-12 lg:items-start lg:py-16">
      <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
        <SparklesIcon size={16} />
        Our Service
      </span>
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          {companyInformation.servicesSection.title}
        </h3>

        <Link
          href={"/services"}
          className="bg-accent hover:bg-accent/90 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base"
        >
          Explore All
        </Link>
      </div>

      <ul className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row">
        {companyInformation.services.slice(0, 3).map((service, i) => (
          <li
            key={i}
            className="flex flex-1 flex-col gap-4 min-[480px]:flex-row md:flex-col"
          >
            <div className="relative aspect-video min-[480px]:w-40 md:w-auto">
              <Image
                src={service.imageUrl}
                alt={service.title}
                className="bg-base-200 object-cover"
                fill
                // placeholder="blur"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="font-medium sm:text-lg">{service.title}</h4>
              <p className="text-base-500 sm:test-base line-clamp-3 text-sm">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
