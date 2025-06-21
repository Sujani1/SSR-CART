import React from "react";

const NavbarSection = () => {
  return (
    <section className="bg-inherit text-inherit">
      <header className="bg-white  shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-indigo-600">SSRCart</h1>

          <div className="w-full max-w-md mx-4">
            <input
              type="text"
              placeholder="Search for products"
              className="w-full border border-gray-300 rounded px-4 py-2 bg-white  text-black  focus:outline-none focus:ring-2 focus:ring-indigo-500 "
            />
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-600  hover:text-indigo-600">
              Login
            </a>
            <a href="#" className="relative text-gray-600  hover:text-indigo-600">
              🛒
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
                1
              </span>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};

export default NavbarSection;
