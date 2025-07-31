import Image from "next/image";
import React from "react";

import doctorConsultation from "@/public/doctor-consultation.jpg";
import { SparklesIcon } from "lucide-react";
import Link from "next/link";

import companyInformation from "@/data";

export default function AboutSection() {
  return (
    <section className="bg-base-100 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto grid w-[90%] max-w-7xl md:grid-cols-2">
        <Image
          src={doctorConsultation}
          alt="Doctor Consultation"
          className="aspect-video min-h-full w-full object-cover"
          placeholder="blur"
        />
        <div className="flex flex-col items-start justify-center gap-4 p-4 md:p-8">
          <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
            <SparklesIcon size={16} />
            About Us
          </span>
          <h3 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            {companyInformation.about.title}
          </h3>
          <p className="text-base-500 text-sm sm:text-base">
            {companyInformation.about.subtitle}
          </p>

          <Link
            href={"/about"}
            className="bg-accent hover:bg-accent/90 mt-4 block rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
