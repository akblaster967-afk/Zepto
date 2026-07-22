import React from "react";
import { Search } from "lucide-react";

function Header({ cartItemCount }) {
  return (
    <div className="flex items-center justify-between bg-white px-6 py-3 border-b">
      <div className="flex items-center gap-4">
        <h2 className="text-sans-serif font-bold text-xl text-fuchsia-600 cursor-pointer">
          zepto
        </h2>

        <h4 className="text-sm font-bold">
          Delivery in minutes*
          <br />
          <span className="text-gray-400 text-[12px] font-normal">
            Select Location
          </span>
        </h4>
      </div>

      {/*Search Bar */}
      <div className="relative flex items-center w-full max-w-md ml-6">
        <Search className="absolute left-3 text-gray-400 w-4 h-4 pointer-events-none" />
        <input
          type="text"
          placeholder='Search for "banana"'
          className="w-full py-2 pl-9 pr-4 bg-gray-100
           text-gray-800 rounded-lg outline-none focus:bg-white
            focus:ring-1 focus:ring-fuchsia-500 text-sm"
        />
      </div>

      {/* Login/cart */}
      <div className="flex items-center gap-6">
        <button className="text-sm font-semibold text-gray-700 hover:text-fuchsia-600">
          Login
        </button>
        <button className="text-sm font-semibold text-gray-700 hover:text-fuchsia-600" aria-label={`Cart with ${cartItemCount} items`}>
          Cart{cartItemCount > 0 ? ` (${cartItemCount})` : ''}
        </button>
      </div>
    </div>
  );
}

export default Header;
