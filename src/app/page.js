"use client";
import { useEffect, useState, useRef } from "react";
import { useData } from "./context/getData";

import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import CountryList from "./countryList";

export default function Home() {
  const searchInputRef = useRef(null);
  const [countries, fetchCountries] = useData();
  console.log("countries: ", countries);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  console.log("filteredCountries: ", filteredCountries);
  const [selectedRegion, setSelectedRegion] = useState("All");
  console.log("selectedRegion: ", selectedRegion);

  const getRegionData = async (event) => {
    searchInputRef.current.value = "";
    const region = event.target.value;
    setSelectedRegion(region);
    if (region == "All") {
      setFilteredCountries(countries);
    } else {
      const findIt = await countries.filter((item) => item.region == region);
      setFilteredCountries(findIt);
    }
  };

  const getKeywordData = async (event) => {
    const keyword = event.target.value;
    console.log("keyword: ", keyword);

    // Eğer arama kutusu boşsa ve bir bölge seçiliyse, bu bölgeye göre filtreleme yap
    if (keyword === "" && selectedRegion !== "All") {
      const regionFiltered = countries.filter(
        (item) => item.region === selectedRegion
      );
      setFilteredCountries(regionFiltered);
      return;
    }

    // Eğer arama kutusu boşsa ve "All" seçiliyse, tüm ülkeleri göster
    if (keyword === "") {
      setFilteredCountries(countries);
      return;
    }

    // Aksi takdirde, arama ve seçilen bölgeye göre filtreleme yap
    const baseCountries =
      selectedRegion === "All"
        ? countries
        : countries.filter((item) => item.region === selectedRegion);
    const findIt = await baseCountries.filter((item) =>
      item.name.common.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredCountries(findIt);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries]);

  useEffect(() => {
    getRegionData({ target: { value: selectedRegion } });
  }, [countries, selectedRegion]);

  return (
    <>
      <div className="flex justify-between items-center mb-16">
        <div className="relative">
          <IoMdSearch
            size={24}
            className="absolute left-3 top-4 text-darkGray dark:text-white"
          />
          <input
            ref={searchInputRef}
            type="text"
            className="shadow-3xl w-[520px] text-veryDarkBlue p-4 pl-12 rounded-md dark:bg-darkBlue dark:text-white"
            placeholder="Search for a country.."
            onChange={getKeywordData}
          />
        </div>
        <div className="relative">
          <MdKeyboardArrowDown className="absolute right-3 top-5" />
          <select
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
        {filteredCountries?.map((country) => (
          <CountryList country={country} key={country.cca2} />
        ))}
      </div>
    </>
  );
}
