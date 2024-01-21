"use client";
import { MdOutlineDarkMode } from "react-icons/md";
export default function Header() {
  const switchTheme = () => {
    console.log("değişti");
  };
  return (
    <nav className="shadow-md">
      <div className="container flex items-center justify-between min-h-[120px] mb-16">
        <div className="font-extrabold text-2xl text-veryDarkBlue2">
          Where in the World?
        </div>
        <button
          type="button"
          className=" gap-3 items-center font-extrabold text-base text-veryDarkBlue2 inline-flex whitespace-nowrap justify-center bg-white rounded-lg hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100 active:border-gray-400 border border-white duration-300 transition-colors hover:border px-3 py-2"
          onClick={() => switchTheme()}
        >
          <MdOutlineDarkMode size={24} />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}
