import React from 'react';

function Services() {
  return (
    <section className="px-6 md:px-16 py-20 bg-white text-center">
      {/* Top Section - Realtor */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
        {/* Text Left */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3">
            Not Your Average Realtor
          </h2>
          <p className="text-gray-600 leading-relaxed">
            RealTrust is known for selling properties with bold, market-tested marketing design — and effectively communicating to get the home sold at top dollar with less hassle.
          </p>
        </div>

        {/* Images Right */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img
                src="https://images.pexels.com/photos/8292776/pexels-photo-8292776.jpeg"
                className="rounded-full w-48 h-48 object-cover mx-auto border-4 border-white shadow-lg"
                alt="Main Realtor"
              />
            </div>
            <img
              src="https://images.pexels.com/photos/8292781/pexels-photo-8292781.jpeg"
              className="rounded-full w-24 h-24 object-cover mx-auto border-4 border-white shadow"
              alt="Team 1"
            />
            <img
              src="https://images.pexels.com/photos/8292777/pexels-photo-8292777.jpeg"
              className="rounded-full w-24 h-24 object-cover mx-auto border-4 border-white shadow"
              alt="Team 2"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div>
        <h3 className="text-2xl font-bold text-blue-700 mb-2">Why Choose Us?</h3>
        <div className="w-16 h-1 bg-blue-500 mx-auto mb-10 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">🏠</div>
            <h4 className="font-bold text-lg text-gray-700 mb-2">Potential ROI</h4>
            <p className="text-sm text-gray-600">
              Our team helps you list your home at the right price to maximize ROI and sell faster.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-bold text-lg text-gray-700 mb-2">Design</h4>
            <p className="text-sm text-gray-600">
              We assist in staging and designing your property to boost appeal for potential buyers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-blue-50 rounded-lg shadow hover:shadow-md transition">
            <div className="text-3xl mb-3">📢</div>
            <h4 className="font-bold text-lg text-gray-700 mb-2">Marketing</h4>
            <p className="text-sm text-gray-600">
              Our advanced online and offline marketing ensures maximum visibility and fast deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
