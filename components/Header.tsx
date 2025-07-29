"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

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
  // {
  //   text: "Blog",
  //   href: "#",
  // },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpen]);

  return (
    <>
      <header className="border-base-200 sticky top-0 z-40 border-b bg-white">
        <nav className="mx-auto flex w-[90%] max-w-7xl items-center justify-between py-2">
          <h1 className="text-accent text-xl font-semibold">
            <Link href={"/"}>ChiroCare</Link>
          </h1>

          <ul className="hidden items-center gap-2 sm:flex">
            {navLinks.map((navLink, i) => (
              <li key={i}>
                <Link
                  href={navLink.href}
                  className={`text-base-500 hover:text-base-800 hover:border-base-700 border-b-2 border-transparent p-2 text-sm font-medium duration-200 ${pathname === navLink.href ? "text-base-800" : ""}`}
                >
                  {navLink.text}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={"/contact"}
            className="hover:bg-accent hover:border-accent hidden rounded-full border p-2 px-4 text-sm font-semibold duration-200 hover:text-white sm:block"
          >
            Appointment
          </Link>

          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="text-base-500 hover:text-base-800 duration-200 sm:hidden"
          >
            {sidebarOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </nav>
      </header>

      <ul
        className={`fixed top-0 right-0 z-20 flex h-dvh w-[80vw] flex-col gap-4 bg-white p-4 px-2 pt-18 duration-200 ${sidebarOpen ? "shadow-2xl" : "translate-x-full"}`}
      >
        {navLinks.map((navLink, i) => (
          <li key={i} onClick={() => setSidebarOpen(false)}>
            <Link
              href={navLink.href}
              className="text-base-500 hover:text-base-800 block p-2 font-medium duration-200"
            >
              {navLink.text}
            </Link>
          </li>
        ))}

        <Link
          href={"/contact"}
          className="bg-accent border-accent hover:bg-accent-200 mt-auto rounded-full border p-2 px-4 text-sm font-semibold text-white duration-200"
        >
          Appointment
        </Link>
      </ul>
    </>
  );
}
