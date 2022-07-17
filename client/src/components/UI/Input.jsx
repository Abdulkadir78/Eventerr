import { forwardRef } from "react";

const Input = forwardRef(
  ({ id, type, labelText, className, ...props }, ref) => {
    return (
      <div className={className}>
        <label htmlFor={id} className="text-sm capitalize">
          {labelText}
        </label>

        <input
          ref={ref}
          id={id}
          type={type}
          className="mt-1 text-black text-opacity-80 w-full bg-gray-100 
          border-none outline-none py-4 px-5 rounded-md focus:ring-0"
          {...props}
        />
      </div>
    );
  }
);

export default Input;
