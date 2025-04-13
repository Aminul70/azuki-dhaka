import React, { useState } from 'react';
import { InkWashBorder } from './ui/InkWashBorder';
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}
type MenuCategory = 'appetizers' | 'smallDish' | 'sushi' | 'sashimi' | 'rolls' | 'maki' | 'udonRamen' | 'teriyaki' | 'riceCurry' | 'special' | 'beverages';
export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('appetizers');
  const menuItems: Record<MenuCategory, MenuItem[]> = {
    appetizers: [{
      id: 1,
      name: 'Spicy Miso Soup',
      description: '',
      price: 'BDT 220'
    }, {
      id: 2,
      name: 'Spicy Edamame',
      description: '',
      price: 'BDT 499'
    }, {
      id: 3,
      name: 'Kanimayo Salad',
      description: '',
      price: 'BDT 520'
    }, {
      id: 4,
      name: 'Chicken Salad',
      description: '',
      price: 'BDT 850'
    }, {
      id: 5,
      name: 'Salmon Carpaccio',
      description: '',
      price: 'BDT 1100'
    }, {
      id: 6,
      name: 'Salmon Salad',
      description: '',
      price: 'BDT 1110'
    }, {
      id: 7,
      name: 'Seafood Salad',
      description: '',
      price: 'BDT 1160'
    }],
    smallDish: [{
      id: 8,
      name: 'Pan Seared Gyoza (Chicken)',
      description: '',
      price: 'BDT 380'
    }, {
      id: 9,
      name: 'Pan Seared Gyoza (Prawn)',
      description: '',
      price: 'BDT 450'
    }, {
      id: 10,
      name: 'Chicken Yakitori',
      description: '',
      price: 'BDT 400'
    }, {
      id: 11,
      name: 'Chicken Kishika Katsu',
      description: '',
      price: 'BDT 410'
    }, {
      id: 12,
      name: 'Chicken Nanban',
      description: '',
      price: 'BDT 490'
    }, {
      id: 13,
      name: 'Chicken Karaage',
      description: '',
      price: 'BDT 510'
    }, {
      id: 14,
      name: 'Grilled Squid',
      description: '',
      price: 'BDT 990'
    }, {
      id: 15,
      name: 'Tempura (Vegetable)',
      description: '',
      price: 'BDT 450'
    }, {
      id: 16,
      name: 'Tempura (Ebi)',
      description: '',
      price: 'BDT 700'
    }, {
      id: 17,
      name: 'Tempura (Mixed Seafood)',
      description: '',
      price: 'BDT 750'
    }],
    sushi: [],
    sashimi: [],
    rolls: [{
      id: 18,
      name: 'Azuki Special Roll',
      description: '',
      price: 'BDT 1001'
    }, {
      id: 19,
      name: 'Aburi Salmon Roll',
      description: '',
      price: 'BDT 1190'
    }, {
      id: 20,
      name: 'Golden Roll',
      description: '',
      price: 'BDT 1100'
    }, {
      id: 21,
      name: 'Crab Mentai Mayo Roll',
      description: '',
      price: 'BDT 910'
    }, {
      id: 22,
      name: 'Azuki 3 in 1 Roll',
      description: '',
      price: 'BDT 850'
    }, {
      id: 23,
      name: 'Kanimayo Golden Roll',
      description: '',
      price: 'BDT 890'
    }, {
      id: 24,
      name: 'Crazy Salmon Roll',
      description: '',
      price: 'BDT 1290'
    }, {
      id: 25,
      name: 'Azuki Unagi Roll',
      description: '',
      price: 'BDT 1500'
    }, {
      id: 26,
      name: 'Oyako Salmon Roll',
      description: '',
      price: 'BDT 1050'
    }, {
      id: 27,
      name: 'Philly Golden Roll',
      description: '',
      price: 'BDT 910'
    }],
    maki: [{
      id: 28,
      name: 'Salmon Maki',
      description: '',
      price: 'BDT 590'
    }, {
      id: 29,
      name: 'Tuna Maki',
      description: '',
      price: 'BDT 590'
    }, {
      id: 30,
      name: 'California Maki',
      description: '',
      price: 'BDT 660'
    }, {
      id: 31,
      name: 'Ebi Tempura Maki',
      description: '',
      price: 'BDT 450'
    }, {
      id: 32,
      name: 'Kanimayo Tobiko Maki',
      description: '',
      price: 'BDT 760'
    }, {
      id: 33,
      name: 'Prawn Avocado Maki',
      description: '',
      price: 'BDT 730'
    }, {
      id: 34,
      name: 'Salmon Avocado Maki',
      description: '',
      price: 'BDT 650'
    }, {
      id: 35,
      name: 'Salmon Salad Ebiko Maki',
      description: '',
      price: 'BDT 760'
    }, {
      id: 36,
      name: 'Crab & Lava Avocado Maki',
      description: '',
      price: 'BDT 630'
    }, {
      id: 37,
      name: 'KaniKama Maki',
      description: '',
      price: 'BDT 420'
    }],
    udonRamen: [{
      id: 38,
      name: 'Udon (Chicken)',
      description: '',
      price: 'BDT 690'
    }, {
      id: 39,
      name: 'Udon (Beef)',
      description: '',
      price: 'BDT 750'
    }, {
      id: 40,
      name: 'Savory Udon Soup',
      description: '',
      price: 'BDT 760'
    }, {
      id: 41,
      name: 'Kaisen Ramen',
      description: '',
      price: 'BDT 950'
    }, {
      id: 42,
      name: 'Azuki Special Ramen',
      description: '',
      price: 'BDT 990'
    }],
    teriyaki: [{
      id: 43,
      name: 'Teriyaki (Chicken)',
      description: '',
      price: 'BDT 420'
    }, {
      id: 44,
      name: 'Teriyaki (Gravy Chicken)',
      description: '',
      price: 'BDT 450'
    }, {
      id: 45,
      name: 'Unagi Teriyaki',
      description: '',
      price: 'BDT 2150'
    }, {
      id: 46,
      name: 'Azuki Sizzling (Chicken)',
      description: '',
      price: 'BDT 650'
    }, {
      id: 47,
      name: 'Azuki Sizzling (Beef)',
      description: '',
      price: 'BDT 750'
    }, {
      id: 48,
      name: 'Azuki Sizzling (Prawn)',
      description: '',
      price: 'BDT 770'
    }, {
      id: 49,
      name: 'Azuki Spicy Cuttlefish',
      description: '',
      price: 'BDT 650'
    }, {
      id: 50,
      name: 'Kodai Spicy Chicken',
      description: '',
      price: 'BDT 550'
    }, {
      id: 51,
      name: 'Kodai Spicy Beef',
      description: '',
      price: 'BDT 690'
    }],
    riceCurry: [{
      id: 52,
      name: 'Chicken Katsu Don',
      description: '',
      price: 'BDT 750'
    }, {
      id: 53,
      name: 'Chicken Oyako Don',
      description: '',
      price: 'BDT 650'
    }, {
      id: 54,
      name: 'Chicken Basil Rice',
      description: '',
      price: 'BDT 680'
    }, {
      id: 55,
      name: 'Chicken Katsu Curry Rice',
      description: '',
      price: 'BDT 950'
    }, {
      id: 56,
      name: 'Chicken Curry Rice',
      description: '',
      price: 'BDT 700'
    }, {
      id: 57,
      name: 'Fried Rice (Egg)',
      description: '',
      price: 'BDT 200'
    }, {
      id: 58,
      name: 'Fried Rice (Chicken)',
      description: '',
      price: 'BDT 320'
    }, {
      id: 59,
      name: 'Fried Rice (Seafood)',
      description: '',
      price: 'BDT 450'
    }, {
      id: 60,
      name: 'Poke Bowl (Small)',
      description: '',
      price: 'BDT 690'
    }, {
      id: 61,
      name: 'Poke Bowl (Large)',
      description: '',
      price: 'BDT 1050'
    }],
    special: [{
      id: 62,
      name: 'Salmon Sando Sushi',
      description: '',
      price: 'BDT 850'
    }, {
      id: 63,
      name: 'Avocado Sando Sushi',
      description: '',
      price: 'BDT 750'
    }, {
      id: 64,
      name: 'Rainbow Sushi Pizza',
      description: '',
      price: 'BDT 1150'
    }, {
      id: 65,
      name: 'Azuki Sushi Pizza',
      description: '',
      price: 'BDT 1050'
    }, {
      id: 66,
      name: 'Seafood Rice Paper Roll',
      description: '',
      price: 'BDT 690'
    }, {
      id: 67,
      name: 'Salmon Ebi Mash',
      description: '',
      price: 'BDT 2150'
    }, {
      id: 68,
      name: 'Azuki Chicken Mash',
      description: '',
      price: 'BDT 950'
    }],
    beverages: [{
      id: 69,
      name: 'Lilac Mangolicious',
      description: '',
      price: 'BDT 650'
    }, {
      id: 70,
      name: 'Alkaline Water (250mL)',
      description: '',
      price: 'BDT 30'
    }, {
      id: 71,
      name: 'Alkaline Water (650mL)',
      description: '',
      price: 'BDT 65'
    }, {
      id: 72,
      name: 'Soft Drinks (250mL can)',
      description: '',
      price: 'BDT 70'
    }]
  };
  return <section id="menu" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone mb-4">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto mb-8"></div>
          <p className="text-gray-700">
            Discover our carefully crafted dishes made with the finest
            ingredients
          </p>
        </div>
        <InkWashBorder className="p-8">
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {(Object.keys(menuItems) as MenuCategory[]).map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-sm transition-all ${activeCategory === category ? 'bg-sage text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>)}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems[activeCategory].map(item => <div key={item.id} className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <span className="text-lg font-medium text-red-700">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {item.popular && <div className="mt-4">
                    <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-sm">
                      Popular Choice
                    </span>
                  </div>}
              </div>)}
          </div>
        </InkWashBorder>
      </div>
    </section>;
};