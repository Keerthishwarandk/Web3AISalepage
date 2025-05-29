import React from 'react';

const DelegatePasses = () => (
  <section className="bg-gray-100 py-10 px-6" id="passes">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🎟 Delegate Passes</h2>
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="bg-white p-6 rounded shadow-md w-full md:w-1/3">
        <h3 className="text-xl font-bold">🎫 Standard</h3>
        <p>Access to all sessions + luxury dining</p>
        <p className="font-semibold mt-2">₹35,000</p>
      </div>
      <div className="bg-white p-6 rounded shadow-md w-full md:w-1/3">
        <h3 className="text-xl font-bold">🏅 VIP</h3>
        <p>All-access pass + media exposure + VIP lounge</p>
        <p className="font-semibold mt-2">₹55,000</p>
      </div>
    </div>
  </section>
);

export default DelegatePasses;
