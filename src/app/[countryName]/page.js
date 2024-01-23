"use client";

import { useEffect, useState } from "react";
import { useData } from "../context/getData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import numeral from "numeral";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CountryDetail({ params }) {
  const [countries, fetchCountries] = useData();
  const [country, setCountry] = useState();
  const router = useRouter();

  async function getCountryData() {
    const findIt = await countries.filter(
      (item) => item.cca2 == params.countryName
    );
    setCountry(findIt);
  }

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
    } else {
      getCountryData();
    }
  }, []);

  return (
    <div>
      <button
        className="inline-flex gap-3 bg-white py-3 px-9 shadow-3xl items-center rounded-md font-semibold dark:bg-darkBlue dark:text-white mb-16"
        onClick={() => router.back()}
      >
        <FaArrowLeftLong />
        Back
      </button>
      {country?.map((country, index) => (
        <div className="grid grid-cols-2 gap-24" key={index}>
          <div>
            <Image
              src={country.flags.svg}
              width={0}
              height={0}
              alt={country.name.common}
              className="max-w-full w-full h-auto object-cover object-center aspect-[16/9] border border-solid border-gray-200 dark:border-none"
            />
          </div>
          <div className="grid content-around">
            <p className="font-bold text-3xl mb-5 leading-7 col-span-2">
              {country.name.common}
            </p>
            <div className="grid grid-cols-2 gap-5">
              <div className="grid gap-1">
                <div className="font-bold">
                  Native Name:
                  <span className="font-normal ml-2">
                    {country.name.nativeName.cat}
                  </span>
                </div>
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
                  Sub Region:
                  <span className="font-normal ml-2">{country.subregion}</span>
                </div>
              </div>
              <div className="grid gap-1">
                <div className="font-bold">
                  Capital:
                  <span className="font-normal ml-2">{country.capital}</span>
                </div>
                <div className="font-bold">
                  Top Level Domain:
                  <span className="font-normal ml-2">{country.tld}</span>
                </div>
                <div className="font-bold">
                  Currencies:
                  <span className="font-normal ml-2">
                    {country.currencies.EUR}
                  </span>
                </div>
                <div className="font-bold">
                  Languages:
                  <span className="font-normal ml-2">
                    {country.languages.cat}
                  </span>
                </div>
              </div>
            </div>
            <div className="font-bold col-span-2">
              Border Countries:
              {country.borders.map((item) => (
                <span className="ml-4 inline-flex gap-3 font-normal bg-white py-1 px-6 shadow-3xl items-center rounded-md  dark:bg-darkBlue dark:text-white ">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
