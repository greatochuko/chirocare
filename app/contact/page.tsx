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

const contactInformations = [
  {
    Icon: PhoneIcon,
    name: "Phone",
    value: "+1-234-567-890",
  },
  {
    Icon: MapPinIcon,
    name: "Address",
    value: "1 Straight road, SF, CA.",
  },
  {
    Icon: MailIcon,
    name: "Email",
    value: "hello@chirocare.com",
  },
  {
    Icon: FacebookIcon,
    name: "Facebook",
    value: "@chirocare",
  },
  {
    Icon: InstagramIcon,
    name: "Instagram",
    value: "@chirocare",
  },
  {
    Icon: YoutubeIcon,
    name: "Youtube",
    value: "@chirocare",
  },
];

const businessHours = [
  {
    day: "Monday - Friday",
    time: "8:00AM - 6:00PM",
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
              {contactInformations.map((contactInfo, i) => (
                <div key={i} className="flex gap-2">
                  <contactInfo.Icon size={16} className="text-accent" />
                  <div className="flex flex-col text-sm">
                    <h3 className="font-medium uppercase">
                      {contactInfo.name}
                    </h3>
                    <p className="text-base-500">{contactInfo.value}</p>
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
              {businessHours.map((businessHour, i) => (
                <div key={i} className="flex flex-col">
                  <h3 className="font-medium uppercase">{businessHour.day}</h3>
                  <p className="text-base-500 text-sm">{businessHour.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <LeafletMap />
    </div>
  );
}
