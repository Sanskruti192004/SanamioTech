const Header = () => {
  return (
    <header className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          SANAM<span className="text-purple-500">IO</span>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li className="hover:text-blue-400 cursor-pointer">Home</li>
          <li className="hover:text-blue-400 cursor-pointer">About</li>
          <li className="hover:text-blue-400 cursor-pointer">Services</li>
          <li className="hover:text-blue-400 cursor-pointer">Portfolio</li>
          <li className="hover:text-blue-400 cursor-pointer">Contact</li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-5">
          <button className="text-white text-lg">☀️</button>
          <button className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded-sm font-semibold">
            Get Started
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
