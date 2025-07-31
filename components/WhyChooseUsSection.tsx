import { CheckCircleIcon, SparklesIcon } from "lucide-react";
import React from "react";

import companyInformation from "@/data";

export default function WhyChooseUsSection() {
  return (
    <section className="bg-base-100">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col items-center gap-4 py-8 sm:gap-6 sm:py-12 lg:items-start lg:py-16">
        <span className="text-accent flex items-center gap-2 text-sm capitalize sm:text-base">
          <SparklesIcon size={16} />
          Why choose us?
        </span>
        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          Reasons to choose {companyInformation.companyName}
        </h3>

        <ul className="grid justify-between gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {companyInformation.reasonsToChooseUs.map((reason, i) => (
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
