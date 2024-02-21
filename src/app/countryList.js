import React from "react";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";

export default function CountryList({ country }) {
  return (
    <div className="shadow-4xl dark:shadow-5xl rounded-lg dark:bg-darkBlue flex flex-col justify-between">
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
  );
}
