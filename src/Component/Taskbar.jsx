import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Home, 
  Baby, 
  Apple, 
  Headphones, 
  Smartphone, 
  Sparkles, 
  Shirt 
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All', icon: ShoppingBag },
  { id: 'cafe', label: 'Cafe', icon: Coffee },
  { id: 'home', label: 'Home', icon: Home },
  { id: 'toys', label: 'Toys', icon: Baby },
  { id: 'fresh', label: 'Fresh', icon: Apple },
  { id: 'electronics', label: 'Electronics', icon: Headphones },
  { id: 'mobiles', label: 'Mobiles', icon: Smartphone },
  { id: 'beauty', label: 'Beauty', icon: Sparkles },
  { id: 'fashion', label: 'Fashion', icon: Shirt },
];

const Taskbar = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide py-3">
          {categories.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 pb-1 relative group cursor-pointer ${
                  isActive
                    ? 'text-purple-800 font-semibold'
                    : 'text-gray-600 hover:text-purple-700'
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive ? 'text-purple-800' : 'text-gray-500 group-hover:text-purple-700'
                  }`}
                />
                <span>{item.label}</span>

                {/* Active Indicator Line (Zepto style purple underline) */}
                {isActive && (
                  <span className="absolute bottom-[-12px] left-0 right-0 h-[3px] bg-purple-800 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;