import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import spinalAdjustmentImage from "@/public/doctor-consultation.jpg";

const services = [
  {
    image: spinalAdjustmentImage,
    title: "Spinal Adjustments",
    description:
      "Realign the spine to relieve pressure, reduce pain, and restore natural movement.",
  },
  {
    image: spinalAdjustmentImage,
    title: "Posture Correction",
    description:
      "Improve posture through targeted therapies that reduce strain on your muscles and joints.",
  },
  {
    image: spinalAdjustmentImage,
    title: "Sports Injury Rehab",
    description:
      "Customized recovery plans to help athletes heal faster and prevent future injuries.",
  },
  {
    image: spinalAdjustmentImage,
    title: "Neck & Back Pain Relief",
    description:
      "Targeted treatments to ease chronic or sudden pain in the neck and lower back.",
  },
  {
    image: spinalAdjustmentImage,
    title: "Headache & Migraine Management",
    description:
      "Non-invasive techniques to reduce the frequency and intensity of headaches.",
  },
];

export default function ServiceSection() {
  return (
    <section className="mx-auto flex w-[90%] max-w-7xl flex-col gap-4 p-8 sm:gap-6 sm:p-12 lg:p-16">
      <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
        <SparklesIcon size={16} />
        Our Service
      </span>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
          Experienced in different types of therapy
        </h3>

        <button className="bg-accent hover:bg-accent-200 mt-4 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base">
          Explore All
        </button>
      </div>

      <ul className="flex justify-between gap-6 sm:gap-8">
        {services.slice(0, 3).map((service, i) => (
          <li key={i} className="flex flex-1 flex-col gap-4">
            <div className="relative aspect-square">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover"
                fill
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-medium sm:text-lg">{service.title}</h4>
              <p className="text-base-500 sm:test-base text-sm">
                {service.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
