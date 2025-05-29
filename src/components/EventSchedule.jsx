import React from 'react';

const EventSchedule = () => (
  <section className="bg-white py-10 px-6" id="schedule">
    <h2 className="text-3xl font-bold text-center text-purple-900 mb-6">🗓️ Event Schedule</h2>
    <ul className="max-w-3xl mx-auto text-gray-700 space-y-4">
      <li><strong>☀️ Morning Kickoff (10:00 AM – 10:30 AM):</strong> Inaugural address by national leaders + Cultural performances</li>
      <li><strong>🔍 Industry Roundtables (10:30 AM – 2:00 PM):</strong> AI, FinTech, Energy, MSME, HealthTech + Networking breaks</li>
      <li><strong>🏆 Viksit Bharat Awards (3:00 PM – 4:30 PM):</strong> Honors for leaders + Press coverage</li>
      <li><strong>🥂 Gala Dinner (4:30 PM – 9:00 PM):</strong> Networking with India’s elite</li>
    </ul>
  </section>
);

export default EventSchedule;