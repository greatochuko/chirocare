import Image from "next/image";
import React from "react";

import heroImage1 from "@/public/hero-image-1.jpg";
import profilePicture1 from "@/public/profile-picture-1.jpg";
import profilePicture2 from "@/public/profile-picture-2.jpg";
import profilePicture3 from "@/public/profile-picture-3.jpg";
import happyPatient from "@/public/happy-patient.jpg";
import { MoveRightIcon } from "lucide-react";

const reviewImages = [profilePicture1, profilePicture2, profilePicture3];

export default function Hero() {
  return (
    <>
      <section className="bg-blue-50">
        <div className="mx-auto grid aspect-[2] min-h-80 w-[90%] max-w-7xl sm:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-4 pr-8">
            <h2 className="text-[max(1.2rem,_min(3vw,_3rem))] font-semibold">
              Relief Starts Here. Restore Comfort, Mobility, and Balance
            </h2>
            <p className="text-base-500 text-sm sm:text-base lg:text-lg">
              Experience expert chiropractic care tailored to your body&apos;s
              unique needs. Whether you&apos;re recovering from injury, managing
              chronic pain, or simply aiming for a healthier, more active
              lifestyle.
            </p>
            <button className="bg-accent hover:bg-accent-200 mt-4 rounded-full px-4 py-2 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base">
              Book an Appointment
            </button>
          </div>
          <div className="relative">
            <Image
              src={heroImage1}
              alt="A woman getting a back massage"
              className="hidden h-full object-cover sm:block"
              fill
            />
          </div>
        </div>
      </section>
      <section className="mx-auto grid w-[90%] max-w-7xl py-8 sm:py-12 lg:grid-cols-2 lg:py-16">
        <div className="flex flex-col-reverse gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col gap-4 py-4">
            <h3 className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
              Happy Customers
            </h3>
            <p className="text-base-500 border-accent border-l-2 pl-4">
              Are you tired of living with back pain and ready to feel your best
              again? Welcome to ChiroCare.
            </p>
            <div className="flex items-center">
              <div className="flex items-center">
                {reviewImages.map((image, i) => (
                  <Image
                    key={i}
                    src={image}
                    alt="Review Image"
                    width={56}
                    height={56}
                    className="rounded-full border-3 border-white"
                    style={{
                      transform: `translateX(-${i * 30}%)`,
                    }}
                  />
                ))}
              </div>
              <p className="flex-1 -translate-x-4">
                <span className="font-semibold">1050+</span> reviews from
                clients
              </p>
            </div>
          </div>
          <Image
            src={happyPatient}
            alt="Happy patient"
            className="aspect-video w-full object-cover sm:aspect-square sm:w-60"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-4 py-4 lg:p-12">
          <h3 className="text-lg font-medium sm:text-xl">
            Special discount on your first visit
          </h3>
          <p className="text-base-500">
            As a token of appreciation for choosing us, we&apos;re offering an
            exclusive discount on your first visit!
          </p>
          <button className="text-accent flex items-center gap-2 underline-offset-2 hover:underline">
            Get the offer <MoveRightIcon size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
