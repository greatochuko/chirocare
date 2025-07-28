import Link from "next/link";
import React from "react";

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "Services",
    href: "/services",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
  {
    text: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-4">
        <h1 className="text-accent text-xl font-semibold">ChiroCare</h1>

        <ul className="hidden items-center gap-2 sm:flex">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                href={navLink.href}
                className="text-base-500 hover:text-base-800 hover:border-base-700 border-b-2 border-transparent p-2 text-sm font-medium duration-200"
              >
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        <button className="hover:bg-accent hover:border-accent rounded-full border p-2 px-4 text-sm font-semibold duration-200 hover:text-white">
          Appointment
        </button>
      </nav>
    </header>
  );
}
