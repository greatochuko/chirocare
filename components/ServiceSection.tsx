import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import spinalAdjustmentImage from "@/public/spinal-adjustment.jpg";
import postureCorrectionImage from "@/public/posture-correction.jpg";
import sportsInjuryImage from "@/public/sports-injury.jpg";
import neckPainImage from "@/public/neck-and-back-pain.jpg";
import headacheImage from "@/public/headach-and-migrane-management.jpg";

const services = [
  {
    image: spinalAdjustmentImage,
    title: "Spinal Adjustments",
    description:
      "Realign the spine to relieve pressure, reduce pain, and restore natural movement.",
  },
  {
    image: postureCorrectionImage,
    title: "Posture Correction",
    description:
      "Improve posture through targeted therapies that reduce strain on your muscles and joints.",
  },
  {
    image: sportsInjuryImage,
    title: "Sports Injury Rehab",
    description:
      "Customized recovery plans to help athletes heal faster and prevent future injuries.",
  },
  {
    image: neckPainImage,
    title: "Neck & Back Pain Relief",
    description:
      "Targeted treatments to ease chronic or sudden pain in the neck and lower back.",
  },
  {
    image: headacheImage,
    title: "Headache & Migraine Management",
    description:
      "Non-invasive techniques to reduce the frequency and intensity of headaches.",
  },
];

export default function ServiceSection() {
  return (
    <section className="mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-4 py-8 sm:gap-6 sm:py-12 lg:items-start lg:py-16">
      <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
        <SparklesIcon size={16} />
        Our Service
      </span>
      <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          Experienced in different types of therapy
        </h3>

        <button className="bg-accent hover:bg-accent-200 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base">
          Explore All
        </button>
      </div>

      <ul className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row">
        {services.slice(0, 3).map((service, i) => (
          <li
            key={i}
            className="flex flex-1 flex-col gap-4 min-[480px]:flex-row md:flex-col"
          >
            <div className="relative aspect-video min-[480px]:aspect-square min-[480px]:w-40 md:w-auto">
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
