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
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Contact Us",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <nav className="flex items-center justify-between w-[90%] py-4 mx-auto max-w-7xl">
        <h1 className="font-semibold text-xl">ChiroCare</h1>

        <ul className="flex items-center gap-2">
          {navLinks.map((navLink, i) => (
            <li key={i}>
              <Link
                href={navLink.href}
                className="font-medium text-gray-600 hover:text-gray-800 duration-200 p-2 hover:underline"
              >
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>

        <button className="bg-gray-800 hover:bg-gray-900 duration-200 font-medium text-white text-sm rounded-md p-2 px-4">
          Book an appointment
        </button>
      </nav>
    </header>
  );
}
