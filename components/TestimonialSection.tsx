"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MessageSquareQuoteIcon,
  SparklesIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

import companyInformation from "@/data";

export default function TestimonialSection() {
  const reviewContainerRef = useRef<HTMLDivElement>(null);

  function handlePrev() {
    reviewContainerRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });
  }

  function handleNext() {
    reviewContainerRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });
  }

  return (
    <section className="mx-auto flex w-[90%] max-w-7xl flex-col gap-4 py-8 sm:gap-6 sm:py-12 lg:gap-8 lg:py-16">
      <div className="flex flex-col gap-4">
        <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
          <SparklesIcon size={16} />
          Testimonial
        </span>

        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          What people say about our therapy
        </h3>
      </div>

      <div
        className="no-scrollbar grid snap-x snap-mandatory grid-flow-col gap-6 overflow-scroll p-1"
        ref={reviewContainerRef}
        style={{ gridAutoColumns: "20rem" }}
      >
        {companyInformation.testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="border-base-100 flex snap-start flex-col gap-4 rounded-xl border bg-white p-4 shadow"
          >
            <div className="flex justify-between">
              <MessageSquareQuoteIcon size={20} />
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon key={i} size={16} />
                ))}
              </div>
            </div>
            <p className="text-base-500 text-sm sm:text-base">
              {testimonial.review}
            </p>
            <div className="mt-auto flex items-center gap-2">
              <Image
                src={testimonial.profilePictureUrl}
                alt={testimonial.name}
                width={32}
                height={32}
                className="bg-base-200 overflow-hidden rounded-full"
              />
              <h4 className="text-sm font-medium sm:text-base">
                {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-accent hover:bg-accent/90 rounded-full border p-2 text-white duration-200"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-accent hover:bg-accent/90 rounded-full border p-2 text-white duration-200"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </section>
  );
}
