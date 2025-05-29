import React from 'react';

const Partners = () => (
  <section className="bg-gray-100 py-10 px-6" id="partners">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🏢 Our Partners</h2>
    <p className="text-center text-gray-600 mb-4">📰 Powered by: Times Now, Nasscom, Startup India, Indian Express</p>
    <div className="flex justify-center gap-4 flex-wrap">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-32 h-16 bg-white shadow rounded" />
      ))}
    </div>
  </section>
);

export default Partners;