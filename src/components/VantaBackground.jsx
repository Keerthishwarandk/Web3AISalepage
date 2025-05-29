import React, { useEffect, useRef, useState } from "react";
import GLOBE from "vanta/dist/vanta.globe.min";
import * as THREE from "three"; // Ensure three.js is imported

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          
mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xff4282,
  backgroundColor: 0x201338,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="relative w-full h-[400px] flex items-center justify-center text-white"
    >
      <div className="absolute z-10">{children}</div>
    </div>
  );
};

export default VantaBackground;
    