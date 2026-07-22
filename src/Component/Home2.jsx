import React from "react";

// Product Card Reusable Component
const ProductCard = ({
  title,
  weight,
  price,
  originalPrice,
  discount,
  rating,
  ratingCount,
  image,
  isBestseller,
  tag,
  quantity = 0,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="min-w-[155px] max-w-[165px] sm:min-w-[180px] bg-white border border-gray-100 rounded-2xl p-2.5 sm:p-3 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative shrink-0 group">
      {/* Top Badges */}
      <div className="flex items-center justify-between text-[10px] font-extrabold min-h-[18px]">
        {isBestseller ? (
          <span className="bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded-xs font-bold text-[9px] uppercase">
            Bestseller
          </span>
        ) : (
          <span />
        )}

        {discount && (
          <span className="bg-emerald-700 text-white px-1.5 py-0.5 rounded-xs font-bold text-[9px]">
            {discount}
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="w-full h-28 sm:h-32 my-2 flex items-center justify-center relative p-1">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
          loading="lazy"
        />
        {/* ADD Button overlay on Image */}
        {quantity > 0 ? (
          <div className="absolute bottom-0 right-0 flex items-center overflow-hidden rounded-xl border-2 border-[#ff3269] bg-white text-xs font-black text-[#ff3269] shadow-sm">
            <button
              type="button"
              onClick={() => onRemoveFromCart({ title })}
              className="px-2 py-1 hover:bg-[#ff3269] hover:text-white"
              aria-label={`Remove one ${title}`}
            >
              −
            </button>
            <span className="min-w-6 text-center" aria-live="polite">{quantity}</span>
            <button
              type="button"
              onClick={() => onAddToCart({ title })}
              className="px-2 py-1 hover:bg-[#ff3269] hover:text-white"
              aria-label={`Add one more ${title}`}
            >
              +
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => onAddToCart({ title })}
            className="absolute bottom-0 right-0 bg-white border-2 border-[#ff3269] text-[#ff3269] hover:bg-[#ff3269] hover:text-white px-3 py-1 rounded-xl text-xs font-black uppercase transition-colors shadow-sm cursor-pointer"
          >
            ADD
          </button>
        )}
      </div>

      {/* Details */}
      <div className="space-y-1 mt-1">
        {/* Price Row */}
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-black text-gray-900">{price}</span>
          {originalPrice && (
            <span className="text-[10px] text-gray-400 line-through font-semibold">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[11px] sm:text-xs font-bold text-gray-800 line-clamp-2 leading-tight">
          {title}
        </h3>

        {/* Quantity */}
        <p className="text-[10px] font-semibold text-gray-500">{weight}</p>

        {/* Tag / Rating */}
        <div className="pt-1 flex items-center justify-between text-[9px] font-bold">
          {tag ? (
            <span className="bg-teal-50 text-teal-700 px-1.5 py-0.5 rounded border border-teal-100">
              {tag}
            </span>
          ) : rating ? (
            <div className="flex items-center text-emerald-700 gap-0.5 bg-emerald-50 px-1 rounded">
              <span>★</span>
              <span>{rating}</span>
              {ratingCount && (
                <span className="text-gray-400 text-[8px]">
                  ({ratingCount})
                </span>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Category Card Component (Big Boxes)
const CategoryBox = ({ name, image }) => {
  return (
    <div className="flex flex-col items-center bg-[#f4f6fb] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-all cursor-pointer group border border-gray-100">
      <div className="w-full h-24 sm:h-32 flex items-center justify-center p-1">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <span className="text-xs sm:text-sm font-black text-gray-900 text-center mt-3 leading-tight">
        {name}
      </span>
    </div>
  );
};

// Section Container Component
const ProductSection = ({ title, products, cart, onAddToCart, onRemoveFromCart }) => (
  <section className="space-y-3">
    <div className="flex items-center justify-between">
      <h2 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">
        {title}
      </h2>
      <button className="text-[#ff3269] font-extrabold text-xs sm:text-sm hover:underline flex items-center gap-0.5 cursor-pointer">
        <span>See All</span>
        <span>&gt;</span>
      </button>
    </div>

    <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-2 pt-1">
      {products.map((item) => (
        <ProductCard
          key={item.title}
          {...item}
          quantity={cart[item.title] || 0}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      ))}
    </div>
  </section>
);

const Home2 = ({ cart, onAddToCart, onRemoveFromCart }) => {
  // DATA ARRAYS

  // 1. Dal & Pulses
  const dalPulses = [
    {
      title: "Sri Bhagyalakshmi Fried Gram",
      weight: "1 pc (500 g)",
      price: "₹72",
      originalPrice: "₹80",
      discount: "₹8 OFF",
      rating: "4.7",
      ratingCount: "11.3k",
      image:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&q=80",
    },
    {
      title: "Tata Sampann Unpolished Masoor - Whole",
      weight: "1 pack (500 g)",
      price: "₹79",
      isBestseller: true,
      rating: "4.7",
      ratingCount: "20.4k",
      image:
        "https://images.unsplash.com/photo-1543332164-6e82f355badc?w=200&q=80",
    },
    {
      title: "Tata Sampann Unpolished Moong Dal",
      weight: "1 pack (500 g)",
      price: "₹83",
      originalPrice: "₹107",
      discount: "₹24 OFF",
      isBestseller: true,
      tag: "Unpolished",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=200&q=80",
    },
    {
      title: "Tata Sampann Kala Chana",
      weight: "1 pack (500 g)",
      price: "₹58",
      originalPrice: "₹74",
      discount: "₹16 OFF",
      tag: "Power Pulse",
      rating: "5",
      ratingCount: "35.2k",
      image:
        "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=200&q=80",
    },
    {
      title: "Daily Good Unpolished Urad White Whole",
      weight: "1 pack (1 kg)",
      price: "₹148",
      originalPrice: "₹250",
      discount: "₹102 OFF",
      rating: "4.9",
      ratingCount: "16.4k",
      image:
        "https://images.unsplash.com/photo-1585830812416-a6c86bb14576?w=200&q=80",
    },
  ];

  // 2. Personal Hygiene
  const personalHygiene = [
    {
      title: "BECO Moisturising Liquid Handwash",
      weight: "1 pack (675 ml)",
      price: "₹92",
      originalPrice: "₹119",
      discount: "₹27 OFF",
      tag: "Teakwood Flavour",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80",
    },
    {
      title: "Cinthol Original Talcum Powder",
      weight: "1 pc (300 g)",
      price: "₹166",
      originalPrice: "₹190",
      discount: "₹24 OFF",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80",
    },
    {
      title: "Nycil Germ Expert Prickly Heat Powder",
      weight: "1 pc (50 g)",
      price: "₹48",
      originalPrice: "₹50",
      discount: "₹2 OFF",
      rating: "4.6",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFHNGguI5hKdezzuIiYLuMUqm3mIX5hgo3TUajkdxkKSp3-ylBe0lGvpeX&s=10",
    },
    {
      title: "Z Magnetism For Men Talc",
      weight: "1 pc (50 g)",
      price: "₹78",
      rating: "4.7",
      ratingCount: "2.5k",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80",
    },
  ];

  // 3. Oils & Ghee
  const oilsGhee = [
    {
      title: "Sunpure Refined Sunflower Oil - Pouch",
      weight: "1 pack (1 L)",
      price: "₹175",
      originalPrice: "₹220",
      discount: "₹45 OFF",
      tag: "Pure & Light",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=200&q=80",
    },
    {
      title: "Nandini Pure Ghee | Pouch",
      weight: "1 pack (500 ml)",
      price: "₹338",
      originalPrice: "₹350",
      discount: "₹12 OFF",
      tag: "Cow Ghee",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&q=80",
    },
    {
      title: "Gold Winner Refined Sunflower Oil",
      weight: "1 pack (1 L)",
      price: "₹178",
      originalPrice: "₹205",
      discount: "₹27 OFF",
      tag: "Pure & Light",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?w=200&q=80",
    },
  ];

  // 4. Chips & Crisps
  const chipsCrisps = [
    {
      title: "Bingo! Original Style Chilli Sprinkled",
      weight: "1 pack (85 g)",
      price: "₹37",
      originalPrice: "₹50",
      discount: "₹13 OFF",
      tag: "Original",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=200&q=80",
    },
    {
      title: "Balaji Crunchex Chilli Tadka Wafers",
      weight: "1 pack (135 g)",
      price: "₹40",
      tag: "Chilli Tadka",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=200&q=80",
    },
    {
      title: "Uncle Chipps Plain Salted Potato Chips",
      weight: "1 pack (80 g)",
      price: "₹38",
      originalPrice: "₹48",
      discount: "₹10 OFF",
      tag: "Salted",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?w=200&q=80",
    },
  ];

  // 5. Soft Drinks & Mixers
  const softDrinks = [
    {
      title: "Kinley Soda | Carbonated Water",
      weight: "1 pc (750 ml)",
      price: "₹19",
      originalPrice: "₹20",
      isBestseller: true,
      tag: "Soda",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&q=80",
    },
    {
      title: "Monster Energy Ultra Zero Sugar",
      weight: "1 pc (350 ml)",
      price: "₹115",
      originalPrice: "₹125",
      isBestseller: true,
      tag: "Original",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=200&q=80",
    },
    {
      title: "Bisleri Soda | Sparkling Mineral Water",
      weight: "1 pc (750 ml)",
      price: "₹20",
      tag: "Soda",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200&q=80",
    },
    {
      title: "Coca-Cola Zero Sugar Soft Drink",
      weight: "1 pc (750 ml)",
      price: "₹38",
      originalPrice: "₹40",
      tag: "Zero Sugar",
      rating: "4.6",
      image:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=200&q=80",
    },
  ];

  // 6. Chocolates
  const chocolates = [
    {
      title: "Ferrero Rocher Premium Gift Pack",
      weight: "1 pack (50 g)",
      price: "₹179",
      tag: "Ferrero Gift",
      rating: "4.8",
      image:
        "https://www.bbassets.com/media/uploads/p/s/40185970_4-choki-choki-chocomilk-duo.jpg",
    },
    {
      title: "Choki Choki Choco Milk Stick Pouch",
      weight: "1 pack (50 pcs)",
      price: "₹100",
      originalPrice: "₹120",
      discount: "₹20 OFF",
      tag: "Choco Milk",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1582176604038-74ed313f4285?w=200&q=80",
    },
    {
      title: "Twix Cookie Caramel Chocolate Bar",
      weight: "1 pc (50 g)",
      price: "₹93",
      originalPrice: "₹99",
      tag: "Caramel",
      rating: "4.7",
      image:
        "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=200&q=80",
    },
  ];

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 py-6 space-y-10 font-sans bg-white">
      {/* SECTIONS LIST */}
      <ProductSection title="Dal & Pulses" products={dalPulses} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      <ProductSection title="Personal Hygiene" products={personalHygiene} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      <ProductSection title="Oils & Ghee" products={oilsGhee} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      <ProductSection title="Chips & Crisps" products={chipsCrisps} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      <ProductSection title="Soft Drinks & Mixers" products={softDrinks} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
      <ProductSection title="Chocolates" products={chocolates} cart={cart} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />

      {/* CATEGORY EXPLORER 1: Grocery & Kitchen */}
      <section className="space-y-4 pt-4 border-t border-gray-100">
        <h2 className="text-xl font-black text-gray-900">Grocery & Kitchen</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          <CategoryBox
            name="Fruits & Vegetables"
            image="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200&q=80"
          />
          <CategoryBox
            name="Dairy, Bread & Eggs"
            image="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80"
          />
          <CategoryBox
            name="Atta, Rice, Oil & Dals"
            image="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200&q=80"
          />
          <CategoryBox
            name="Meat, Fish & Eggs"
            image="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=200&q=80"
          />
          <CategoryBox
            name="Masala & Dry Fruits"
            image="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80"
          />
          <CategoryBox
            name="Breakfast & Sauces"
            image="https://images.unsplash.com/photo-1525351484163-7529414344d8?w=200&q=80"
          />
          <CategoryBox
            name="Packaged Food"
            image="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=200&q=80"
          />
        </div>
      </section>

      {/* CATEGORY EXPLORER 2: Household Essentials */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">
          Household Essentials
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <CategoryBox
            name="Home Needs"
            image="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=200&q=80"
          />
          <CategoryBox
            name="Kitchen & Dining"
            image="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200&q=80"
          />
          <CategoryBox
            name="Cleaning Essentials"
            image="https://images.unsplash.com/photo-1585830812416-a6c86bb14576?w=200&q=80"
          />
          <CategoryBox
            name="Electronics Store"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80"
          />
          <CategoryBox
            name="Pet Care"
            image="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=200&q=80"
          />
          <CategoryBox
            name="Toys & Games"
            image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=200&q=80"
          />
          <CategoryBox
            name="Stationery & Books"
            image="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=200&q=80"
          />
          <CategoryBox
            name="Paan Corner"
            image="https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=200&q=80"
          />
        </div>
      </section>

      {/* CATEGORY EXPLORER 3: Beauty & Personal Care */}
      <section className="space-y-4">
        <h2 className="text-xl font-black text-gray-900">
          Beauty & Personal Care
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          <CategoryBox
            name="Personal Care Studio"
            image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&q=80"
          />
          <CategoryBox
            name="Skincare"
            image="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&q=80"
          />
          <CategoryBox
            name="Makeup & Beauty"
            image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=200&q=80"
          />
          <CategoryBox
            name="Fragrance"
            image="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&q=80"
          />
          <CategoryBox
            name="Bath & Body"
            image="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&q=80"
          />
          <CategoryBox
            name="Haircare"
            image="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=200&q=80"
          />
        </div>
      </section>
    </div>
  );
};

export default Home2;
