import React from 'react';

const categories = [
  { 
    name: 'Fruits &\nVegetables', 
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Dairy, Bread\n& Eggs', 
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Atta, Rice,\nOil & Dals', 
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Meat, Fish\n& Eggs', 
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Masala &\nDry Fruits', 
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Breakfast &\nSauces', 
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Packaged\nFood', 
    image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Zepto\nCafe', 
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Tea, Coffee\n& More', 
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Ice Creams\n& More', 
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&auto=format&fit=crop&q=80' 
  },
  { 
    name: 'Frozen\nFood', 
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=150&auto=format&fit=crop&q=80' 
  },
];

const Home = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-4 md:p-6 space-y-6 font-sans bg-white">
      
      {/* 1. TOP CATEGORIES ROW */}
      <div className="relative group">
        <div className="flex items-start space-x-3 sm:space-x-4 overflow-x-auto scrollbar-hide py-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center min-w-[76px] sm:min-w-[88px] cursor-pointer"
            >
              <div className="w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] bg-[#f4f6fb] rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-200 hover:scale-105 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name.replace('\n', ' ')}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <span className="text-[11px] sm:text-[12px] font-bold text-[#20232A] text-center mt-2 leading-tight whitespace-pre-line">
                {cat.name}
              </span>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow Button */}
        <button className="hidden sm:flex absolute right-0 top-7 bg-black text-white w-7 h-7 rounded-full items-center justify-center shadow-md hover:bg-gray-800 transition-all">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* 2. BANNERS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        
        {/* BANNER 1: Zepto Experience */}
        <div className="bg-[#ede7fe] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between relative border border-purple-100">
          <div>
            {/* Header */}
            <h2 className="text-[#6d28d9] font-black text-center text-sm sm:text-base tracking-wide uppercase mb-4">
              ALL NEW ZEPTO EXPERIENCE
            </h2>

            {/* Inner Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* ₹0 Fees Card */}
              <div className="bg-white rounded-2xl p-3 flex items-center gap-2 sm:gap-3 shadow-xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8b5cf6] rounded-xl flex items-center justify-center text-white font-black text-2xl relative shrink-0">
                  Z
                </div>
                <div className="text-[#3b0764] font-black text-lg sm:text-2xl tracking-tight">
                  ₹0 FEES
                </div>
              </div>

              {/* Low Prices Card */}
              <div className="bg-white rounded-2xl p-3 flex items-center gap-2 sm:gap-3 shadow-xs">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8b5cf6] rounded-xl flex items-center justify-center text-yellow-300 font-bold text-xl shrink-0">
                  ₹
                </div>
                <div className="leading-none">
                  <div className="text-[#3b0764] font-extrabold text-xs sm:text-sm tracking-wide">EVERYDAY</div>
                  <div className="text-[#6d28d9] font-black text-xs sm:text-sm tracking-wide">LOW PRICES*</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Checks */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-1 text-[11px] sm:text-[12px] font-bold text-[#4c1d95]">
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-[#16a34a] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                <span>₹0 Handling Fee</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-[#16a34a] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                <span>₹0 Delivery Fee*</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-4 h-4 bg-[#16a34a] text-white rounded-full flex items-center justify-center text-[10px]">✓</span>
                <span>₹0 Rain & Surge Fee</span>
              </div>
            </div>
            <p className="text-[9px] text-gray-500 text-center mt-2 font-medium">
              *T&C Apply. Above specific minimum order value
            </p>
          </div>
        </div>

        {/* BANNER 2: Paan Corner */}
        <div className="bg-[#ccf1f1] rounded-[24px] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden min-h-[220px]">
          <div className="max-w-[60%] sm:max-w-[65%] z-10">
            <h2 className="text-[#064e3b] font-black text-2xl sm:text-3xl tracking-tight mb-2">
              PAAN CORNER
            </h2>
            <p className="text-[#047857] font-semibold text-xs sm:text-sm leading-snug mb-6">
              Get smoking accessories, fresheners & more delivered in minutes!
            </p>

            <button className="bg-[#1e293b] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-black transition-colors shadow-sm">
              <span>Order now</span>
              <span>&gt;</span>
            </button>
          </div>

          {/* Right Product Graphic */}
          <div className="absolute right-2 bottom-2 w-36 sm:w-48 h-full flex items-end justify-end pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=250&auto=format&fit=crop&q=80"
              alt="Paan Corner Items"
              className="max-h-[85%] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
