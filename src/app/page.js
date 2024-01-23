"use client";
import { useEffect, useState } from "react";
import { useData } from "./context/getData";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  const [countries, fetchCountries] = useData();
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [regionCountries, setRegionCountries] = useState();
  console.log("countries: ", countries);
  console.log("selectedRegion: ", selectedRegion);
  console.log("regionCountries: ", regionCountries);

  async function getRegionData(event) {
    setSelectedRegion(event.target.value);
    if (event.target.value == "All") {
      fetchCountries();
    } else {
      const findIt = await countries.filter(
        (item) => item.region == event.target.value
      );
      console.log("findIt: ", findIt);
      setRegionCountries(findIt);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, [selectedRegion]);

  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <div className="relative">
          <IoMdSearch
            size={24}
            className="absolute left-3 top-4 text-darkGray dark:text-white"
          />
          <input
            type="text"
            className="shadow-3xl w-[520px] text-veryDarkBlue p-4 pl-12 rounded-md dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country.."
          />
        </div>
        <div className="relative">
          <MdKeyboardArrowDown className="absolute right-3 top-5" />
          <select
            value={selectedRegion}
            onChange={getRegionData}
            className="shadow-3xl text-veryDarkBlue py-4 pl-5 pr-14 rounded-md appearance-none dark:bg-darkBlue dark:text-white"
          >
            <option value="All">Filter by Region</option>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
      </div>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 items-stretch">
        {(selectedRegion == "All" ? countries : regionCountries)?.map(
          (country, index) => (
            <div
              className="shadow-4xl dark:shadow-5xl rounded-lg dark:bg-darkBlue flex flex-col justify-between"
              key={index}
            >
              <Link href={`/${country.cca2}`}>
                <Image
                  src={country.flags.svg}
                  width={0}
                  height={0}
                  alt={country.name.common}
                  className="rounded-[8px_8px_0_0] w-full h-auto object-cover object-center aspect-[16/9] border-b border-solid border-gray-300 dark:border-none"
                />
              </Link>

              <div className="p-6">
                <p className="font-bold text-2xl mb-5 leading-7">
                  {country.name.common}
                </p>
                <div className="font-bold">
                  Population:
                  <span className="font-normal ml-2">
                    {numeral(country.population).format("0,0")}
                  </span>
                </div>
                <div className="font-bold">
                  Region:
                  <span className="font-normal ml-2">{country.region}</span>
                </div>
                <div className="font-bold">
                  Capital:
                  <span className="font-normal ml-2">{country.capital}</span>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
