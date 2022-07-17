import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Button from "./UI/Button";

const liButtonStyles = `w-full text-start p-3 rounded-md hover:bg-gray-100`;

function SortByDropdown({ activeSortBy, handleChange }) {
  return (
    <div className="relative">
      <Button
        text="Sort by"
        className="mt-5 md:mt-0 peer"
        icon={<MdOutlineKeyboardArrowDown className="ml-1 text-lg" />}
        outlined
      />

      <div
        className="absolute top-16 md:top-11 right-0 bg-white shadow-md z-20
         md:w-[250%] rounded-md p-5 hidden peer-focus:block hover:block"
      >
        <ul>
          <li>
            <button
              className={`${liButtonStyles} ${
                activeSortBy === "start ascending" && "bg-gray-100"
              }`}
              onClick={() => handleChange("start ascending")}
            >
              Start date: Ascending
            </button>
          </li>
          <li>
            <button
              className={`${liButtonStyles} ${
                activeSortBy === "start descending" && "bg-gray-100"
              }`}
              onClick={() => handleChange("start descending")}
            >
              Start date: Descending
            </button>
          </li>
          <li>
            <button
              className={`${liButtonStyles} ${
                activeSortBy === "end ascending" && "bg-gray-100"
              }`}
              onClick={() => handleChange("end ascending")}
            >
              End date: Ascending
            </button>
          </li>
          <li>
            <button
              className={`${liButtonStyles} ${
                activeSortBy === "end descending" && "bg-gray-100"
              }`}
              onClick={() => handleChange("end descending")}
            >
              End date: Descending
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SortByDropdown;
