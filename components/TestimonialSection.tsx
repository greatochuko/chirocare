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

import profilePicture1 from "@/public/profile-picture-1.jpg";
import profilePicture2 from "@/public/profile-picture-2.jpg";
import profilePicture3 from "@/public/profile-picture-3.jpg";

const reviews = [
  {
    profilePicture: profilePicture2,
    review:
      "After just a few sessions, my lower back pain is almost completely gone. Dr. Kate truly knows what she's doing.",
    name: "Michelle O.",
  },
  {
    profilePicture: profilePicture1,
    review:
      "I came in barely able to turn my neck. Now I feel like a new person. Highly recommend this clinic!",
    name: "Derrick L.",
  },
  {
    profilePicture: profilePicture3,
    review:
      "Warm staff, clean office, and Dr. Josh is incredibly skilled. My posture has improved noticeably.",
    name: "Sandra T.",
  },
  {
    profilePicture: profilePicture1,
    review:
      "Was skeptical at first, but this has helped my migraines more than anything else I've tried.",
    name: "Brian C.",
  },
  {
    profilePicture: profilePicture2,
    review:
      "I appreciate how much time they took to explain everything. Very personalized and professional care.",
    name: "Elena P.",
  },
  {
    profilePicture: profilePicture3,
    review:
      "They got me walking upright again after a sports injury. Forever grateful for their care and patience.",
    name: "Mark A.",
  },
  {
    profilePicture: profilePicture1,
    review:
      "Every visit leaves me feeling better and better. It’s like a reset button for my body each week.",
    name: "Tina W.",
  },
  {
    profilePicture: profilePicture2,
    review:
      "I’ve tried other chiropractors, but this team is the real deal. They genuinely care about your health.",
    name: "Jason M.",
  },
  {
    profilePicture: profilePicture3,
    review:
      "I used to wake up with back stiffness every day. That’s completely gone now thanks to Dr. Lisa!",
    name: "Heather S.",
  },
  {
    profilePicture: profilePicture1,
    review:
      "Professional, friendly, and effective. I’m finally pain-free after years of discomfort.",
    name: "David R.",
  },
];

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
        {reviews.map((review, i) => (
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
              {review.review}
            </p>
            <div className="flex items-center gap-2">
              <Image
                src={review.profilePicture}
                alt={review.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <h4 className="text-sm font-medium sm:text-base">
                {review.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="bg-accent hover:bg-accent-200 rounded-full border p-2 text-white duration-200"
        >
          <ChevronLeftIcon size={20} />
        </button>
        <button
          onClick={handleNext}
          className="bg-accent hover:bg-accent-200 rounded-full border p-2 text-white duration-200"
        >
          <ChevronRightIcon size={20} />
        </button>
      </div>
    </section>
  );
}
