import Image from "next/image";
import React from "react";
import doctor from "@/public/doctor.jpg";

import companyInformation from "@/data";

export default function page() {
  return (
    <>
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 py-6 lg:flex-row">
        <div className="flex items-center justify-center lg:hidden">
          <Image
            src={doctor}
            alt="Doctor"
            placeholder="blur"
            className="aspect-square w-48 rounded-2xl object-cover object-top sm:w-60"
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4 leading-7">
            <h1 className="text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-left">
              {companyInformation.doctorFullName}
            </h1>
            {companyInformation.aboutDoctor.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-lg font-medium sm:text-xl md:text-2xl lg:text-left">
              Degrees & Certifications
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-3 text-sm">
              {companyInformation.educationAndCertifications.map(
                (education, i) => (
                  <li key={i}>
                    <span className="text-accent font-medium">
                      {education.school}
                    </span>
                    <ul className="ml-6 flex list-inside list-disc flex-col gap-1">
                      {education.certifications.map((cert, i) => (
                        <li key={i} className="">
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
        <div className="relative hidden flex-1 lg:block">
          <Image
            src={doctor}
            alt="Doctor"
            fill
            placeholder="blur"
            className="rounded-2xl object-cover object-top"
          />
        </div>
      </div>
    </>
  );
}
