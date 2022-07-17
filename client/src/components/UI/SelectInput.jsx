import { forwardRef } from "react";

const SelectInput = forwardRef(
  ({ id, labelText, options, defaultOption, className, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="text-sm capitalize">
          {labelText}
        </label>

        <select
          ref={ref}
          id={id}
          defaultValue={""}
          className="mt-1 text-black text-opacity-80 w-full bg-gray-100 
            border-none outline-none py-4 px-5 rounded-md focus:ring-0"
          {...props}
        >
          <option value="" disabled>
            {defaultOption}
          </option>

          {options?.map((option, index) => (
            <option key={index} value={option} className="capitalize">
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectInput;
