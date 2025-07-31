import Image from "next/image";
import React from "react";

import heroImage1 from "@/public/hero-image-1.jpg";
import happyPatient from "@/public/happy-patient.jpg";
import { MoveRightIcon } from "lucide-react";
import Link from "next/link";

import companyInformation from "@/data";

const showDisCountSection = true;

export default function Hero() {
  return (
    <>
      <section className="bg-accent/5">
        <div className="mx-auto grid aspect-[2] min-h-72 w-[90%] max-w-7xl sm:min-h-88 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:items-start sm:pr-8 sm:text-left">
            <h2 className="text-[max(1.2rem,_min(3vw,_3rem))] font-semibold">
              {companyInformation.hero.title}
            </h2>
            <p className="text-base-500 text-sm sm:text-base lg:text-lg">
              {companyInformation.hero.subtitle}
            </p>
            <Link
              href={"/contact"}
              className="bg-accent hover:bg-accent/90 mt-4 rounded-full px-6 py-3 text-sm font-semibold text-white duration-300 sm:px-6 sm:py-3 sm:text-base"
            >
              {companyInformation.hero.callToAction}
            </Link>
          </div>
          <div className="relative hidden sm:block">
            <Image
              src={heroImage1}
              alt="A woman getting a back massage"
              className="hidden h-full object-cover sm:block"
              fill
              placeholder="blur"
            />
          </div>
        </div>
      </section>
      {showDisCountSection && (
        <section className="mx-auto grid w-[90%] max-w-7xl py-8 sm:py-12 lg:grid-cols-2 lg:py-16">
          <div className="flex flex-col-reverse gap-8 sm:flex-row">
            <div className="flex flex-1 flex-col gap-4 py-4">
              <h3 className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
                Happy Customers
              </h3>
              <p className="text-base-500 border-accent border-l-2 pl-4">
                Are you tired of living with back pain and ready to feel your
                best again? Welcome to {companyInformation.companyName}.
              </p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {companyInformation.testimonials
                    .slice(0, 3)
                    .map((testimonial, i) => (
                      <Image
                        key={i}
                        src={testimonial.profilePictureUrl}
                        alt="Review Image"
                        width={56}
                        height={56}
                        className="bg-base-200 overflow-hidden rounded-full border-3 border-white"
                        style={{
                          transform: `translateX(-${i * 30}%)`,
                        }}
                        // placeholder="blur"
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
              className="bg-base-200 aspect-video w-full overflow-hidden object-cover sm:aspect-square sm:w-60"
              placeholder="blur"
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
      )}
    </>
  );
}
