import Image from "next/image";
import React from "react";

import doctorConsultation from "@/public/doctor-consultation.jpg";
import { SparklesIcon } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-base-100 p-8 sm:p-12 lg:p-16">
      <div className="mx-auto grid w-[90%] max-w-7xl lg:grid-cols-2">
        <Image src={doctorConsultation} alt="Doctor Consultation" />
        <div className="flex flex-col items-start justify-center gap-4 p-8">
          <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
            <SparklesIcon size={16} />
            About Us
          </span>
          <h3 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
            Your Health, Our Priority
          </h3>
          <p className="text-base-500 text-sm sm:text-base">
            At ChiroCare, we focus on personalized chiropractic solutions that
            relieve pain, improve mobility, and restore your overall well-being.
            Discover how we&apos;ve helped hundreds feel better, move better,
            and live better.
          </p>

          <button className="bg-accent hover:bg-accent-200 mt-4 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
