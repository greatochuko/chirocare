import { SparklesIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

import spinalAdjustmentImage from "@/public/spinal-adjustment.jpg";
import postureCorrectionImage from "@/public/posture-correction.jpg";
import sportsInjuryImage from "@/public/sports-injury.jpg";
import neckPainImage from "@/public/neck-and-back-pain.jpg";
import headacheImage from "@/public/headach-and-migrane-management.jpg";
import Link from "next/link";

export const services = [
  {
    image: spinalAdjustmentImage,
    title: "Spinal Adjustments",
    description:
      "Our spinal adjustment therapy focuses on realigning the vertebrae to relieve nerve pressure, improve joint mobility, and support your body’s natural healing abilities. This technique is ideal for those experiencing chronic pain, stiffness, or postural imbalances.",
  },
  {
    image: postureCorrectionImage,
    title: "Posture Correction",
    description:
      "Through a combination of manual techniques, therapeutic exercises, and lifestyle guidance, we help you correct poor posture habits. This reduces strain on your spine and muscles, enhances breathing, and prevents long-term discomfort or injury.",
  },
  {
    image: sportsInjuryImage,
    title: "Sports Injury Rehab",
    description:
      "We provide tailored rehabilitation programs designed for athletes and active individuals recovering from strains, sprains, and overuse injuries. Our approach promotes faster recovery, enhances performance, and reduces the risk of future injury through strength, mobility, and balance training.",
  },
  {
    image: neckPainImage,
    title: "Neck & Back Pain Relief",
    description:
      "Whether you're dealing with a pinched nerve, herniated disc, or muscular tension, our neck and back pain treatments use a combination of chiropractic adjustments, soft tissue therapy, and ergonomic advice to restore comfort and function.",
  },
  {
    image: headacheImage,
    title: "Headache & Migraine Management",
    description:
      "We address the root causes of tension headaches and migraines using non-invasive techniques such as spinal adjustments, trigger point therapy, and stress reduction strategies, helping you achieve long-term relief without reliance on medication.",
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

        <Link
          href={"/services"}
          className="bg-accent hover:bg-accent-200 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base"
        >
          Explore All
        </Link>
      </div>

      <ul className="flex flex-col justify-between gap-6 sm:gap-8 md:flex-row">
        {services.slice(0, 3).map((service, i) => (
          <li
            key={i}
            className="flex flex-1 flex-col gap-4 min-[480px]:flex-row md:flex-col"
          >
            <div className="relative aspect-video min-[480px]:w-40 md:w-auto">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover"
                fill
                placeholder="blur"
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
