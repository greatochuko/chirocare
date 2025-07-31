import {
  FacebookIcon,
  InstagramIcon,
  LucideIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

import companyInformation from "@/data";

const socialMediaLinks: {
  Icon: LucideIcon;
  link?: string;
  className: string;
}[] = [
  {
    Icon: FacebookIcon,
    link: companyInformation.contactInfo.socialMedia.facebook?.link,
    className: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    Icon: InstagramIcon,
    link: companyInformation.contactInfo.socialMedia.instagram?.link,
    className: "hover:text-purple-500 hover:border-purple-500",
  },
  {
    Icon: YoutubeIcon,
    link: companyInformation.contactInfo.socialMedia.youtube?.link,
    className: "hover:text-red-500 hover:border-red-500",
  },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Services", href: "/services" },
      { text: "Contact", href: "/contact" },
      // { text: "Blog", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-base-800 text-white">
      <div className="mx-auto flex w-[90%] max-w-7xl flex-wrap justify-between gap-x-4 gap-y-8 py-8">
        <div className="flex max-w-80 flex-col gap-4">
          <h2 className="text-lg font-semibold sm:text-xl">
            {companyInformation.companyName}
          </h2>
          <p className="text-base-300 text-sm">
            {companyInformation.footer.description}
          </p>
          <div className="mt-2 flex items-center gap-2">
            {socialMediaLinks
              .filter((sm) => !!sm.link)
              .map((smLink, i) => (
                <Link
                  key={i}
                  href={smLink.link!}
                  className={`text-base-400 border-base-400 rounded border p-1 duration-200 hover:border-white hover:text-white ${smLink.className}`}
                >
                  <smLink.Icon size={16} />
                </Link>
              ))}
          </div>
        </div>
        {footerLinks.map((footerLink, i) => (
          <div key={i} className="flex min-w-60 flex-col gap-4">
            <h4 className="text-lg font-semibold">{footerLink.title}</h4>
            <ul className="flex flex-col gap-2">
              {footerLink.links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-base-300 text-sm hover:text-white hover:underline"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <input
            type="text"
            className="rounded-full border border-white px-6 py-3 text-sm sm:text-base"
            placeholder="Enter your email"
          />
          <button className="bg-accent hover:bg-accent/90 rounded-full px-6 py-3 text-center text-sm font-semibold text-white duration-200 sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
      <p className="bg-base-900 text-base-500 p-2 text-center text-sm">
        &copy; {new Date().getFullYear()} {companyInformation.companyName}
      </p>
    </footer>
  );
}
