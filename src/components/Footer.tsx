import React from 'react';
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src="/images.png" alt="Azuki Logo" className="h-12 mb-4" />
            <p className="text-gray-400 max-w-md">
              Authentic Japanese cuisine crafted with tradition and passion.
              Experience the true taste of Japan at Azuki.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2">
                {['Home', 'About', 'Menu', 'Gallery', 'Reviews', 'Reservation', 'Contact'].map(item => <li key={item}>
                    <button onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({
                  behavior: 'smooth'
                })} className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>1st Floor, House 47, Road 11, Banani, Dhaka, Bangladesh</li>
                <li>Phone: 01905-430858</li>
                <li>Email: azuki.aifoodbeverage@gmail.com</li>
                <li>Facebook: <a href="https://www.facebook.com/AzukiExpressDhaka" target="_blank" className="hover:text-white">Azuki Express Dhaka</a></li>
                <li>Instagram: azuki_dhaka</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Mon-Thu: 12 PM - 10:30 PM</li>
                <li>Fri-Sat: 12 PM - 10:30 PM</li>
                <li>Sun: 12 PM - 10:30 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Azuki Food & Beverage. All rights reserved.
          </p>
          <p className="mt-2 text-gray-400">Developed by Toiral Web Development Company</p>
        </div>
      </div>
    </footer>;
};