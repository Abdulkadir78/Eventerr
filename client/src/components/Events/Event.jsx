import { MdOutlineLocationOn, MdOutlineCalendarToday } from "react-icons/md";

import Chip from "../UI/Chip";

function Event({ name, type, image, region, startDate, endDate, tags }) {
  return (
    <>
      <div className="relative bg-white h-full rounded-lg shadow-sm mx-auto md:mx-0 w-11/12 md:w-5/12 xl:w-3/12 mt-10 pb-14">
        <img src={image} alt="event" className="w-full h-64 object-cover" />
        <div className="p-8">
          <div className="flex items-center gap-2">
            <h4 className="text-lg md:text-xl font-medium truncate">{name}</h4>
            <Chip text={type} type="success" className="capitalize" />
          </div>

          <div className="flex items-center mt-7">
            <MdOutlineLocationOn />
            <span className="capitalize text-sm">{region}</span>
          </div>

          <div className="flex items-center gap-1 mt-4 ml-0.5">
            <MdOutlineCalendarToday className="text-sm" />
            <span className="capitalize text-sm">
              {new Date(startDate)?.toDateString()} -{" "}
              {new Date(endDate)?.toDateString()}
            </span>
          </div>

          <div className="absolute bottom-6">
            <div className="flex flex-wrap ">
              {tags?.map((tag, index) => (
                <Chip key={index} text={tag} className="capitalize" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;
