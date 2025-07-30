import Image from "next/image";
import React from "react";
import doctor from "@/public/doctor.jpg";

const educationAndCertifications: {
  school: string;
  certifications: string[];
}[] = [
  {
    school: "University of Western States",
    certifications: [
      "Doctor of Chiropractic, magna cum laude",
      "Master of Science in Sports Medicine, magna cum laude",
      "Bachelor of Science in Human Biology",
    ],
  },
  {
    school: "Wilfrid Laurier University",
    certifications: ["Bachelor of Science in Kinesiology"],
  },
  {
    school: "American Chiropractic Board of Sports Physicians",
    certifications: ["Certified Chiropractic Sports Physician (CCSP)"],
  },
  {
    school: "Dynamic Neuromuscular Stabilization (DNS)",
    certifications: ["Weightlifting 1", "Exercise 1"],
  },
  {
    school: "First Principles of Movement",
    certifications: ["Member"],
  },
];

export default function page() {
  return (
    <>
      <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 py-6 lg:flex-row">
        <div className="flex items-center justify-center lg:hidden">
          <Image
            src={doctor}
            alt="Doctor"
            className="aspect-square w-48 rounded-2xl object-cover object-top sm:w-60"
          />
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-4 text-sm leading-6">
            <h1 className="text-center text-lg font-semibold sm:text-xl md:text-2xl lg:text-left">
              Dr. Adrian Cole, DC, MS, CCSP
            </h1>
            <p>
              Originally from Santa Fe, New Mexico, Dr. Adrian Cole has always
              been passionate about movement, healing, and human performance.
              Growing up as a competitive dancer and track athlete, Adrian
              developed a keen interest in the mechanics of the body and injury
              prevention. She pursued her undergraduate degree in Exercise
              Science at the University of New Mexico, where she also worked as
              a student athletic trainer supporting the university&apos;s
              women&apos;s volleyball and soccer teams.
            </p>
            <p>
              During her final year, Adrian completed a research project on
              biomechanical asymmetries in adolescent athletes, which led to her
              co-authoring a paper in the Journal of Athletic Training &
              Rehabilitation: Cole, E., Tran, K., & Daniels, R. (2020).
              Functional Movement Screening as a Predictor of Injury in Female
              Collegiate Athletes. JATR, 12(1), 45-52.
            </p>
            <p>
              Her early exposure to sports injuries—and the remarkable care she
              received from chiropractors during her recovery from a severe
              ankle sprain—sparked a lifelong commitment to chiropractic care.
              Adrian went on to earn her Doctorate of Chiropractic and Master of
              Science in Sports Medicine from Southern California University of
              Health Sciences. She is also a Certified Chiropractic Sports
              Physician® (CCSP®), with extensive experience treating high
              school, collegiate, and professional athletes across multiple
              disciplines.
            </p>
            <p>
              At CoreMotion Chiropractic, Dr. Adrian specializes in helping
              active individuals overcome pain and restore functional movement
              through a combination of soft tissue therapy, spinal manipulation,
              and corrective exercise. Her goal is always to provide
              personalized care that supports long-term health and peak
              performance. All of her sessions are one-on-one, allowing for
              focused, comprehensive treatment tailored to each patient&apos;s
              needs.
            </p>
            <p>
              Outside the clinic, Dr. Adrian enjoys trail running, yoga, and
              spending time with her husband Mateo and their rescue dog Luna.
              She&apos;s also a big fan of spicy food and can often be found
              testing out new recipes or hiking the Sangre de Cristo Mountains.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-center text-lg font-medium sm:text-xl md:text-2xl lg:text-left">
              Degrees & Certifications
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-3 text-sm">
              {educationAndCertifications.map((education, i) => (
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
              ))}
            </ul>
          </div>
        </div>
        <div className="relative hidden flex-1 lg:block">
          <Image
            src={doctor}
            alt="Doctor"
            fill
            className="rounded-2xl object-cover object-top"
          />
        </div>
      </div>
    </>
  );
}
