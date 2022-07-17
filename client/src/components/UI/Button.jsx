function Button({ text, outlined, icon, className, ...props }) {
  const classes = outlined
    ? "border text-primary border-primary hover:bg-primary hover:text-white"
    : "bg-primary text-white hover:bg-primary-dark";

  return (
    <button
      className={`text-sm font-medium px-5 py-2.5 rounded-md transition duration-300 
      ${icon && "flex items-center"}
      ${classes} ${className}
    `}
      {...props}
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;
