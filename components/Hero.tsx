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
      <section className="bg-emerald-50">
        <div className="grid sm:grid-cols-2 w-[90%] max-w-7xl mx-auto aspect-[2] min-h-80 ">
          <div className="flex flex-col gap-4 items-start justify-center pr-8">
            <h2 className="text-[max(1.2rem,_min(3vw,_3rem))]  font-semibold">
              Relief Starts Here. Restore Comfort, Mobility, and Balance
            </h2>
            <p className="text-sm lg:text-lg sm:text-base text-base-500">
              Experience expert chiropractic care tailored to your body&apos;s
              unique needs. Whether you&apos;re recovering from injury, managing
              chronic pain, or simply aiming for a healthier, more active
              lifestyle.
            </p>
            <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 duration-300 text-white font-semibold rounded-full py-2 sm:py-3 text-sm sm:text-base px-4 sm:px-6">
              Book an Appointment
            </button>
          </div>
          <div className="relative ">
            <Image
              src={heroImage1}
              alt="A woman getting a back massage"
              className="hidden sm:block object-cover h-full "
              fill
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 w-[90%] max-w-7xl mx-auto">
        <div className="flex gap-8">
          <div className="flex-1 flex flex-col gap-4 py-4">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium">
              Happy Customers
            </h3>
            <p className="text-base-500 border-l-2 border-emerald-400 pl-4">
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
                    className="border-3 border-white rounded-full"
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
            className="w-60 aspect-[1] object-cover"
          />
        </div>
        <div className="justify-center p-12 flex flex-col gap-4 items-start">
          <h3 className="text-lg sm:text-xl font-medium">
            Special discount on your first visit
          </h3>
          <p className="text-base-500">
            As a token of appreciation for choosing us, we&apos;re offering an
            exclusive discount on your first visit!
          </p>
          <button className="text-emerald-600 flex items-center gap-2 hover:underline underline-offset-2">
            Get the offer <MoveRightIcon size={16} />
          </button>
        </div>
      </section>
    </>
  );
}
