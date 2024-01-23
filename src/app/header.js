"use client";
import { useEffect } from "react";
import Link from "next/link";

import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  const switchTheme = () => {
    if (localStorage.theme == "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    // const defaultMode = window.matchMedia(
    //   "(prefers-color-scheme: dark)"
    // ).matches;
    if (localStorage.theme == "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <nav className="shadow-md bg-white dark:bg-darkBlue">
      <div className="container flex items-center justify-between min-h-[90px] mb-16">
        <div className="font-extrabold text-2xl ">
          <Link href="/">Where in the World?</Link>
        </div>
        <button
          type="button"
          className=" gap-2 items-center font-extrabold text-base text-veryDarkBlue2 inline-flex whitespace-nowrap justify-center bg-white rounded-lg hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100 active:border-gray-400 border border-white hover:border px-3 py-2 dark:text-white dark:bg-darkBlue dark:border-darkBlue dark:hover:border-[#435f78] dark:hover:bg-[#2d3f4e]"
          onClick={() => switchTheme()}
        >
          <MdOutlineDarkMode size={24} />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
