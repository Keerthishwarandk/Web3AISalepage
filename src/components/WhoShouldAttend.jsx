// components/WhoShouldAttend.jsx
import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from 'framer-motion';
import 'keen-slider/keen-slider.min.css';
import { FaUserTie, FaUniversity, FaRocket, FaBalanceScale } from 'react-icons/fa';

const cards = [
  { icon: <FaUserTie size={32} />, title: 'For Founders', desc: 'Build strategic partnerships' },
  { icon: <FaRocket size={32} />, title: 'For Investors', desc: 'Spot future unicorns' },
  { icon: <FaUniversity size={32} />, title: 'For Students & Innovators', desc: 'Learn, pitch & grow' },
  { icon: <FaBalanceScale size={32} />, title: 'For Policymakers', desc: 'Shape national digital priorities' },
];

// Auto-slide plugin
function AutoSlidePlugin(slider) {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000); // Change slide every 3s
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

const WhoShouldAttend = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 16 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    slides: { perView: 1, spacing: 12 },
    renderMode: 'performance',
    created: (slider) => {
      AutoSlidePlugin(slider);
    }
  }, [AutoSlidePlugin]);

  return (
    <div className="py-10 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">🧭 Who Should Attend</h2>
      <div ref={sliderRef} className="keen-slider">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="bg-white hover:bg-gray-200 transition-all rounded-xl shadow-lg p-6 text-center h-full">
              <div className="mb-4 text-indigo-800">{card.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-gray-700 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhoShouldAttend;
