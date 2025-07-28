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
      <nav className="flex items-center justify-between w-[90%] py-4 mx-auto max-w-7xl">
        <h1 className="font-semibold text-xl text-emerald-600">ChiroCare</h1>

        <ul className="sm:flex items-center gap-2 hidden ">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                href={navLink.href}
                className="font-medium text-sm text-base-500 border-b-2 hover:text-base-800 border-transparent duration-200 p-2 hover:border-base-700"
              >
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        <button className=" hover:bg-emerald-600 duration-200 font-semibold hover:text-white border rounded-full text-sm  hover:border-emerald-600 p-2 px-4">
          Appointment
        </button>
      </nav>
    </header>
  );
}
