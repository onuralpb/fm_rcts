"use client";

import { useEffect, useState } from "react";
import { useData } from "../context/getData";
import { useRouter } from "next/navigation";
import Image from "next/image";
import numeral from "numeral";
import { FaArrowLeftLong } from "react-icons/fa6";
import Spinner from "../spinner";
import Link from "next/link";
export default function CountryDetail({ params }) {
  const [countries, fetchCountries] = useData();
  const [country, setCountry] = useState();
  const router = useRouter();

  const getCountryData = async () => {
    if (countries) {
      const findIt = await countries.filter(
        (item) => item.cca3 == params.countryName
      );
      setCountry(findIt);
    }
  };

  const convertFullnameBorderCountries = (shortCountryName) => {
    const borderCountries = countries.find(
      (country) => country.cca3 === shortCountryName
    );
    return borderCountries.name.common;
  };

  useEffect(() => {
    if (countries == null && country == undefined) {
      fetchCountries();
    }
    getCountryData();
  }, []);

  useEffect(() => {
    getCountryData();
  }, [countries]);

  return (
    <div>
      <button
        className="inline-flex gap-3 bg-white py-3 px-9 shadow-3xl items-center rounded-md font-semibold dark:bg-darkBlue dark:text-white mb-16"
        onClick={() => router.back()}
      >
        <FaArrowLeftLong />
        Back
      </button>
      {country == undefined ? (
        <Spinner />
      ) : (
        country?.map((country) => (
          <div
            className="grid xl:grid-cols-2 lg:grid-cols-3 gap-24"
            key={country.cca3}
          >
            <div className="xl:col-span-1 lg:col-span-1">
              <Image
                src={country.flags.svg}
                width={0}
                height={0}
                alt={country.name.common}
                className="max-w-full w-full h-auto object-cover object-center aspect-[16/9] border border-solid border-gray-200 dark:border-none"
              />
            </div>
            <div className="grid content-around xl:col-span-1 lg:col-span-2">
              <p className="col-span-2 font-bold text-3xl mb-5 leading-7">
                {country.name.common}
              </p>
              <div className="col-span-2 grid md:grid-cols-2 gap-5">
                <div className="grid gap-1">
                  <div className="font-bold">
                    Native Name:
                    <span className="font-normal ml-2">
                      {Object.values(country.name.nativeName)[0].official}
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
                    <span className="font-normal ml-2">
                      {country.subregion}
                    </span>
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
                      {Object.values(country.currencies)[0].name}
                    </span>
                  </div>
                  <div className="font-bold">
                    Languages:
                    <span className="font-normal ml-2 noLast">
                      {Object.values(country.languages).map((lang, index) => (
                        <span key={index}>
                          {lang}
                          <span>{", "}</span>
                        </span>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
              <div className="font-bold col-span-2 mt-6">
                <span className="mr-4">Border Countries:</span>
                {country.borders?.map((item, index) => (
                  <Link
                    href={`/${item}`}
                    key={index}
                    className="mr-4 inline-flex gap-3 font-normal bg-white py-1 px-6 shadow-3xl items-center rounded-md dark:bg-darkBlue dark:text-white mb-3 hover:bg-[#9bd921]  dark:hover:bg-[#9bd921] dark:hover:text-[#202c37]"
                  >
                    {convertFullnameBorderCountries(item)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
