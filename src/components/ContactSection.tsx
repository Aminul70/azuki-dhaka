import React, { lazy } from 'react';
import { MapPinIcon, PhoneIcon, ClockIcon, MailIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Us
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Visit us for an authentic Japanese dining experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-sm shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPinIcon size={20} className="text-red-700 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Address</h4>
                  <p className="text-gray-600">1st Floor, House 47, Road 11, Banani, Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon size={20} className="text-red-700 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">01905-430858</p>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon size={20} className="text-red-700 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">azuki.aifoodbeverage@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon size={20} className="text-red-700 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-gray-800">Hours</h4>
                  <p className="text-gray-600">Mon-Sun: 12 PM - 10:30 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-red-700 transition-colors">
                  <InstagramIcon size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-700 transition-colors">
                  <FacebookIcon size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-red-700 transition-colors">
                  <TwitterIcon size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="h-96 md:h-full rounded-sm overflow-hidden shadow-md">
            {/* Google Maps iframe with the Azuki location */}
            <div className="w-full h-full bg-stone-200 flex items-center justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.93025107029!2d90.3929772!3d23.781179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c60a39538de7%3A0xf393fe98f5f635f2!2s1st+Floor%2C+House+47%2C+Road+11%2C+Banani%2C+1213+Dhaka%2C+Bangladesh!5e0!3m2!1sen!2sus!4v1678845614000!5m2!1sen!2sus" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Azuki Location"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>;
};