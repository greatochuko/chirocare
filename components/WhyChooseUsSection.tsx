import { CheckCircleIcon, SparklesIcon } from "lucide-react";
import React from "react";

const reasonsToChooseUs = [
  {
    title: "Experienced Professionals",
    description:
      "Our licensed chiropractors bring years of hands-on experience and specialized care to every session.",
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "We tailor each treatment to your specific needs, ensuring the most effective path to recovery.",
  },
  {
    title: "Modern Techniques & Equipment",
    description:
      "We use up-to-date chiropractic methods and advanced tools to deliver safe, efficient care.",
  },
  {
    title: "Patient-Centered Approach",
    description:
      "Your comfort, goals, and long-term health guide everything we do from consultation to care.",
  },
  {
    title: "Trusted by the Community",
    description:
      "Hundreds of satisfied patients rely on us for pain relief, better posture, and healthier living.",
  },
  {
    title: "Convenient Scheduling",
    description:
      "We offer flexible appointment times and easy online booking to fit your busy lifestyle.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-4 p-8 sm:gap-6 sm:p-12 lg:items-start lg:p-16">
        <span className="text-accent flex items-center gap-2 text-sm capitalize sm:text-base">
          <SparklesIcon size={16} />
          Why choose us?
        </span>
        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          Reasons to choose our chiropractic care
        </h3>

        <ul className="grid justify-between gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reasonsToChooseUs.map((reason, i) => (
            <li key={i} className="flex items-start gap-4">
              <CheckCircleIcon size={16} className="text-accent" />
              <div className="flex flex-1 flex-col gap-2">
                <h4 className="font-medium sm:text-lg">{reason.title}</h4>
                <p className="text-base-500 sm:test-base text-sm">
                  {reason.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
