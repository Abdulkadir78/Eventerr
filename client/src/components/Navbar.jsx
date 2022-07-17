import Logo from "../assets/images/brand-logo.png";

function Navbar() {
  return (
    <div className="bg-white shadow-md py-6">
      <div className="container">
        <a href="/" className="text-4xl md:text-5xl font-brand inline-block">
          <img
            src={Logo}
            alt="logo"
            className="w-8 h-8 md:w-10 md:h-10 object-cover inline-block -mt-4 mr-1"
          />
          Eventerr
        </a>
      </div>
    </div>
  );
}

export default Navbar;
