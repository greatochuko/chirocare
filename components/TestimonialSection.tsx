"use client";

import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import profilePicture1 from "@/public/profile-picture-1.jpg";
import profilePicture2 from "@/public/profile-picture-2.jpg";
import profilePicture3 from "@/public/profile-picture-3.jpg";

const reviews = [
  {
    profilePicture: profilePicture1,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque alias accusantium? Quibusdam, molestiae sequi!",
    name: "John",
  },
  {
    profilePicture: profilePicture2,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque alias accusantium? Quibusdam, molestiae sequi!",
    name: "David",
  },
  {
    profilePicture: profilePicture3,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque alias accusantium? Quibusdam, molestiae sequi!",
    name: "Jessica",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    if (currentIndex >= reviews.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentIndex <= 0) {
      setCurrentIndex(reviews.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  return (
    <section className="mx-auto flex w-[90%] max-w-7xl grid-cols-2 flex-col gap-4 py-8 sm:grid sm:gap-6 sm:py-12 lg:gap-8 lg:py-16">
      <div className="flex flex-col gap-4 sm:h-32 md:h-60 lg:h-80">
        <span className="text-accent flex items-center gap-2 text-sm sm:text-base">
          <SparklesIcon size={16} />
          Testimonial
        </span>
        <h3 className="text-lg font-medium capitalize sm:text-xl md:text-2xl lg:text-3xl">
          What people say about our therapy
        </h3>
      </div>
      <div className="relative aspect-square max-h-40 flex-1 sm:row-span-2 sm:aspect-auto sm:h-auto sm:max-h-none">
        {reviews.map((review, i) => (
          <Image
            key={i}
            src={review.profilePicture}
            alt="profile picture"
            fill
            className={`object-cover duration-300 ${i === currentIndex ? "" : "invisible opacity-0"}`}
            placeholder="blur"
          />
        ))}
      </div>
      <div className="mt-auto h-fit">
        {reviews.map((review, i) => (
          <div
            key={i}
            className={`bg-base-100 flex w-full flex-col gap-4 p-4 duration-300 sm:p-6 lg:p-8 ${i === currentIndex ? "" : "hidden"}`}
          >
            <p className="text-base-500 md:text-lg lg:text-xl">
              &ldquo;{review.review}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold sm:text-base">
                {review.name}
              </h4>
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="bg-accent hover:bg-accent-200 disabled:bg-base-300 rounded-full p-2 text-white duration-200 disabled:cursor-not-allowed"
                >
                  <ChevronLeftIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-accent hover:bg-accent-200 disabled:bg-base-300 rounded-full p-2 text-white duration-200 disabled:cursor-not-allowed"
                >
                  <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
