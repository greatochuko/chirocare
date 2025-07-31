import ContactForm from "@/components/ContactForm";
import LeafletMap from "@/components/LeafletMap";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

import companyInformation from "@/data";
import Link from "next/link";

const contactInformations = [
  {
    Icon: PhoneIcon,
    name: "Phone",
    value: companyInformation.contactInfo.phoneNumber,
  },
  {
    Icon: MapPinIcon,
    name: "Address",
    value: companyInformation.contactInfo.location.address,
  },
  {
    Icon: MailIcon,
    name: "Email",
    value: companyInformation.contactInfo.email,
    type: "link",
    href: `mailto:${companyInformation.contactInfo.email}`,
  },
  {
    Icon: FacebookIcon,
    name: "Facebook",
    value: companyInformation.contactInfo.socialMedia.facebook?.link,
    type: "link",
    href: companyInformation.contactInfo.socialMedia.facebook?.link,
  },
  {
    Icon: InstagramIcon,
    name: "Instagram",
    value: companyInformation.contactInfo.socialMedia.instagram?.link,
    type: "link",
    href: companyInformation.contactInfo.socialMedia.instagram?.link,
  },
  {
    Icon: YoutubeIcon,
    name: "Youtube",
    value: companyInformation.contactInfo.socialMedia.youtube?.link,
    type: "link",
    href: companyInformation.contactInfo.socialMedia.youtube?.link,
  },
];

export default function page() {
  return (
    <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-4 py-8 sm:gap-6 lg:gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="flex-1 text-lg font-semibold uppercase sm:text-left md:text-2xl lg:text-3xl">
          Contact Us
        </h1>
        <p className="tesm text-base-500 flex-1 sm:text-base">
          If you have any questions please feel free to get in touch with us via
          phone, text, email, social media, or the form below.
        </p>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="bg-base-100 flex-1 rounded-lg p-4">
          <h2 className="border-base-300 border-b pb-2 text-lg font-medium uppercase">
            Get in touch
          </h2>
          <ContactForm />
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="bg-base-100 flex-1 rounded-lg p-4">
            <h2 className="border-base-300 border-b pb-2 text-lg font-medium uppercase">
              Contact Information
            </h2>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {contactInformations
                .filter((contact) =>
                  contact.type === "link" ? contact.href : contact,
                )
                .map((contactInfo, i) => (
                  <div key={i} className="flex gap-2">
                    <contactInfo.Icon size={16} className="text-accent" />
                    <div className="flex flex-col gap-1 text-sm">
                      <h3 className="font-medium uppercase">
                        {contactInfo.name}
                      </h3>
                      {contactInfo.type === "link" ? (
                        <Link
                          href={contactInfo.href || ""}
                          className="text-base-500 hover:text-base-700 hover:underline"
                        >
                          {contactInfo.href}
                        </Link>
                      ) : (
                        <p className="text-base-500">{contactInfo.value}</p>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-base-100 flex-1 rounded-lg p-4">
            <h2 className="border-base-300 border-b pb-2 text-lg font-medium uppercase">
              Business Hours
            </h2>
            <div className="grid grid-cols-2 pt-4">
              {companyInformation.businessHours.map((businessHour, i) => (
                <div key={i} className="flex flex-col">
                  <h3 className="font-medium uppercase">{businessHour.day}</h3>
                  <p className="text-base-500 text-sm">{businessHour.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LeafletMap
        lat={companyInformation.contactInfo.location.lat}
        lng={companyInformation.contactInfo.location.lng}
      />
    </div>
  );
}
