import { IoMdSearch } from "react-icons/io";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <IoMdSearch size={24} className="absolute left-3 top-3 text-darkGray" />
        <input
          type="text"
          className="shadow-md w-[520px] text-darkGray p-3 pl-12"
          placeholder="Search for a country.."
        />
      </div>
      <div>
        <select class="shadow-md  text-darkGray p-3 px-5">
          <option selected>Select one</option>
          <option value="">New Delhi</option>
          <option value="">Istanbul</option>
          <option value="">Jakarta</option>
        </select>
      </div>
    </div>
  );
}
