const typeToClasses = {
  success: "border-green-300 bg-green-200 text-green-700",
  error: "border-red-300 bg-red-200 text-red-700",
  warning: "border-yellow-300 bg-yellow-200 text-yellow-800",
  info: "border-cyan-300 bg-cyan-200 text-cyan-700",
  default: "border-gray-300 bg-gray-200 text-gray-700",
};

function Chip({ text, type, className, icon }) {
  return (
    <>
      <div
        className={`text-center m-1 px-3 py-1 border rounded-full font-medium
        ${typeToClasses[type] || typeToClasses.default}
        ${className}
        flex
      `}
      >
        <p className={`text-xs ${icon && "mr-1"}`}>{text}</p>
        {icon}
      </div>
    </>
  );
}

export default Chip;
