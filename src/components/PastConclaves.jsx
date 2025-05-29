import React from 'react';

const PastConclaves = () => (
  <section className="bg-white py-10 px-6" id="past">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🖼️ Glimpse from Past Conclaves</h2>
    <p className="text-center text-gray-600 mb-6">A picture is worth a thousand deals</p>
    <div className="flex justify-center flex-wrap gap-4">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="w-60 h-40 bg-gray-300 rounded-lg"></div>
      ))}
    </div>
  </section>
);

export default PastConclaves;

