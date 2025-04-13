import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, UsersIcon, CheckIcon } from 'lucide-react';
export const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: ''
      });
    }, 5000);
  };
  return <section id="reservation" className="py-20 bg-white relative">
      <div className="absolute inset-0 opacity-5 bg-repeat" style={{
      backgroundImage: "url('https://www.transparenttextures.com/patterns/japanese-cube.png')"
    }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Reserve a Table
          </h2>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Book your dining experience at Azuki for an unforgettable Japanese culinary journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-stone-50 p-8 rounded-sm shadow-md">
            {isSubmitted ? <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckIcon size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Reservation Received!
                </h3>
                <p className="text-gray-700">
                  Thank you for your reservation. We'll confirm your booking shortly via email.
                </p>
              </div> : <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700" placeholder="Your name" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700" placeholder="your.email@example.com" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700" placeholder="(123) 456-7890" />
                  </div>

                  {/* Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <div className="relative">
                      <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700" />
                      <CalendarIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                      Time
                    </label>
                    <div className="relative">
                      <select id="time" name="time" value={formData.time} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 appearance-none">
                        <option value="">Select a time</option>
                        <option value="11:30">11:30 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="12:30">12:30 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="13:30">1:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                      </select>
                      <ClockIcon size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700 appearance-none">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7+">7+ People</option>
                      </select>
                      <UsersIcon size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="md:col-span-2">
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea id="specialRequests" name="specialRequests" value={formData.specialRequests} onChange={handleChange} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-red-700" placeholder="Any dietary restrictions or special occasions?" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 text-center">
                  <button type="submit" className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white rounded-sm transition-all transform hover:-translate-y-1 hover:shadow-lg">
                    Reserve Now
                  </button>
                </div>
              </form>}
          </div>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              For parties larger than 7 or special events, please call us directly at (123) 456-7890
            </p>
          </div>
        </div>
      </div>
    </section>;
};