import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full font-sans text-gray-700 bg-white border-t border-gray-100">
      
      {/* 1. HERO BANNER SECTION */}
      <div className="bg-[#f8f9fc] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#858ea9] tracking-tight leading-tight">
            The place that fits all <br />
            your needs
          </h1>
          <p className="text-base sm:text-lg font-bold text-gray-700 flex items-center gap-1.5 pt-2">
            Crafted with love from <span className="text-[#9333ea] font-extrabold">Zepto Team</span> <span className="text-red-500">❤️</span>
          </p>
          <div className="flex items-center gap-2 pt-1">
            <span className="px-1.5 py-0.5 bg-[#15803d] text-white font-extrabold text-[10px] rounded tracking-wider italic uppercase">
              fssai
            </span>
            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              LIC no - 11224999000872
            </span>
          </div>
        </div>
      </div>

      {/* 2. HOW IT WORKS SECTION */}
      <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-base sm:text-lg font-extrabold text-gray-900 mb-8">
          How it Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-xs flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl">
              📱
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Open the app</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[230px]">
              Choose from over 7000 products across groceries, fresh fruits & veggies, meat, pet care, beauty items & more
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-xs flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl">
              🎉
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Place an order</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[230px]">
              Add your favourite items to the cart & avail the best offers
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-xs flex flex-col items-center">
            <div className="w-12 h-12 mb-3 flex items-center justify-center text-3xl">
              🛍️
            </div>
            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Get free delivery</h3>
            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[230px]">
              Experience lighting-fast speed & get all your items delivered in minutes
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      {/* 3. SEO LINKS SECTION */}
      <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-6 text-sm text-gray-500 leading-relaxed font-normal">
        
        {/* Trending Searches */}
        <div className="space-y-1.5">
          <h3 className="text-sm font-extrabold text-gray-900 mb-1">Trending Searches</h3>
          <p>
            <strong className="text-gray-800 font-bold">Categories :</strong> Ice Creams | Sunscreen | Ice Cream Cake | Cold Beverages | Oats | Card and Board Games | Baby Shampoo | Yoga Mats
          </p>
          <p>
            <strong className="text-gray-800 font-bold">Products :</strong> OnePlus 13R | Wellcore Creatine Tango | Nothing Phone 3a Lite | Litchi | iPhone cover | Coconut Water | Diet Coke | Hocco Aamchi Ice Cream
          </p>
          <p>
            <strong className="text-gray-800 font-bold">Brands :</strong> Ob & Gob | Frido Pillow | Dermi Cool | Decathlon
          </p>
        </div>

        {/* Popular Searches */}
        <div className="space-y-1.5">
          <h3 className="text-sm font-extrabold text-gray-900 mb-1">Popular Searches</h3>
          <p>
            <strong className="text-gray-800 font-bold">Products :</strong> Avocado | Strawberry | Pomegranate | Beetroot | Ash gourd | Bottle gourd | Lady finger | Potato | Lemon | Dalchini | Fennel seeds | Blueberry | Papaya | Jeera | Mushroom | Lettuce
          </p>
          <p>
            <strong className="text-gray-800 font-bold">Brands :</strong> Yakult | My Muse | Aashirvaad Atta | Too Yumm | Lays | Figaro Olive Oil | Nandini Milk | Amul | Mother Dairy Near Me | Fortune Oil | Superyou | Durex Condoms | Ferns and Petals
          </p>
          <p>
            <strong className="text-gray-800 font-bold">Categories :</strong> Grocery | Cigarettes | Chips | Curd | Hukka flavour | Paan shop near me | Eggs price | Cheese slice | Fresh fruits | Fresh vegetables | Refined oil | Butter price | Paneer price
          </p>
        </div>

        {/* Categories Grid */}
        <div className="pt-2">
          <h3 className="text-sm font-extrabold text-gray-900 mb-3">Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2.5 gap-x-4 text-sm font-semibold text-gray-800">
            <a href="#" className="hover:text-black">Fruits & Vegetables</a>
            <a href="#" className="hover:text-black">Atta, Rice, Oil & Dals</a>
            <a href="#" className="hover:text-black">Masala & Dry Fruits</a>
            <a href="#" className="hover:text-black">Sweet Cravings</a>

            <a href="#" className="hover:text-black">Frozen Food & Ice Creams</a>
            <a href="#" className="hover:text-black">Baby Food</a>
            <a href="#" className="hover:text-black">Dairy, Bread & Eggs</a>
            <a href="#" className="hover:text-black">Cold Drinks & Juices</a>

            <a href="#" className="hover:text-black">Snacks</a>
            <a href="#" className="hover:text-black">Meats, Fish & Eggs</a>
            <a href="#" className="hover:text-black">Breakfast & Sauces</a>
            <a href="#" className="hover:text-black">Tea, Coffee & More</a>

            <a href="#" className="hover:text-black">Biscuits</a>
            <a href="#" className="hover:text-black">Makeup & Beauty</a>
            <a href="#" className="hover:text-black">Bath & Body</a>
            <a href="#" className="hover:text-black">Cleaning Essentials</a>

            <a href="#" className="hover:text-black">Home Needs</a>
            <a href="#" className="hover:text-black">Electricals & Accessories</a>
            <a href="#" className="hover:text-black">Hygiene & Grooming</a>
            <a href="#" className="hover:text-black">Health & Baby Care</a>

            <a href="#" className="hover:text-black">Homegrown Brands</a>
            <a href="#" className="hover:text-black">Paan Corner</a>
          </div>
        </div>

        {/* Cities */}
        <div className="pt-2">
          <h3 className="text-sm font-extrabold text-gray-900 mb-1.5">Cities</h3>
          <p className="text-xs leading-relaxed text-gray-500">
            Agra | Ahmedabad | Ambala | Amritsar | Bareilly | Belgavi | Bengaluru | Bhiwadi | Chandigarh | Chhatrapati Sambhaji Nagar | Chennai | Coimbatore | Davanagere | Dehradun | Delhi | Faridabad | Ghaziabad | Gorakhpur | Guntur | Gurugram | Hapur | Haridwar | Hisar | Hosur | Hubballi | Hyderabad | Indore | Jaipur | Jalandhar | Kanpur | Karimnagar | Karnal | Kochi | Kolkata | Kota | Kurukshetra | Lucknow | Ludhiana | Madurai | Meerut | Mehsana | Mumbai | Mysuru | Nagpur | Nashik | Noida | Palakkad | Panchkula | Panipat | Patiala | Prayagraj | Puducherry | Pune | Rajkot | Rewari | Saharanpur | SAS Nagar | Sonipat | Surat | Tumkuru | Udaipur | Vadodara | Valsad | Varanasi | Vellore | Vijayawada | Warangal
          </p>
        </div>

      </div>

      <hr className="border-gray-100" />

      {/* 4. BOTTOM FOOTER BAR */}
      <div className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-black text-[#ff3269] tracking-tighter">zepto</h2>
            
            {/* Social Icons (Pure Inline SVGs) */}
            <div className="flex items-center gap-4 text-gray-700">
              {/* Instagram */}
              <a href="#" className="hover:opacity-75 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="#" className="font-extrabold text-sm hover:opacity-75 transition-opacity">
                𝕏
              </a>
              {/* Facebook */}
              <a href="#" className="hover:opacity-75 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:opacity-75 transition-opacity">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

            <div className="text-xs text-gray-400 space-y-0.5 font-medium">
              <p>© Zepto Marketplace Private Limited</p>
              <p>fssai lic no : 11224999000872</p>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 space-y-2 text-sm font-semibold text-gray-700 flex flex-col">
            <a href="#" className="hover:text-black">Home</a>
            <a href="#" className="hover:text-black">Delivery Areas</a>
            <a href="#" className="hover:text-black">Careers</a>
            <a href="#" className="hover:text-black">Customer Support</a>
            <a href="#" className="hover:text-black">Press</a>
            <a href="#" className="hover:text-black">Mojo - a Zepto Blog</a>
            <a href="#" className="hover:text-black">Zepto Recipes</a>
            <a href="#" className="hover:text-black">Bestsellers</a>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-3 space-y-2 text-sm font-semibold text-gray-700 flex flex-col">
            <a href="#" className="hover:text-black">Privacy Policy</a>
            <a href="#" className="hover:text-black">Terms of Use</a>
            <a href="#" className="hover:text-black">Responsible Disclosure Policy</a>
            <a href="#" className="hover:text-black">Sell on Zepto</a>
            <a href="#" className="hover:text-black">Deliver with Zepto</a>
            <a href="#" className="hover:text-black">Franchise with Zepto</a>
            <a href="#" className="hover:text-black">Investor Relations</a>
          </div>

          {/* App Download Buttons Column */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-gray-800">Download App</h4>
            
            {/* Play Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-1.5 hover:border-gray-400 transition-colors bg-white w-full max-w-[180px]"
            >
              <span className="text-lg">▶</span>
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-extrabold leading-none">GET IT ON</div>
                <div className="text-sm font-bold text-gray-900 leading-tight">Google Play</div>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-1.5 hover:border-gray-400 transition-colors bg-white w-full max-w-[180px]"
            >
              <span className="text-xl leading-none"></span>
              <div className="text-left">
                <div className="text-[10px] text-gray-500 uppercase tracking-wider font-extrabold leading-none">Download on the</div>
                <div className="text-sm font-bold text-gray-900 leading-tight">App Store</div>
              </div>
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
