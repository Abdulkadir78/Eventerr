function Spinner({ className }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div
        className="w-10 h-10 border-4 border-primary border-t-transparent
        border-dotted rounded-full animate-spin"
      />
    </div>
  );
}

export default Spinner;
