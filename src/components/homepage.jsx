
import logo_path from "../assets/img/logo.png";
import Button from '@mui/material/Button';

import { motion } from "framer-motion";
import MediaExposure from "./MediaExposure";
import CustomizedTimeline from "./CustomizedTimeline";
import HeroSection from "./HeroSection";
import MultiActionAreaCard from "./MultiActionAreaCard";
import ContactSection from "./ContactSection";
import VantaBackground from  './VantaBackground';

// import Link from '@mui/material/Link';
function homepage() {


    return(
    <>

      <div className="contactheader flex items-center justify-between h-10 w-full bg-purple-950">
      <p className="text-lime-50 pl-6">
          <span className="text-base font-semibold">Viksit Bharat by 2047  </span>
        <span className="text-sm font-normal">Innovate 💡, Collaborate 🤝, Celebrate 🎉</span>
      </p>
      
      <div className="contact-us flex items-center">
      <i class='bx  bx-envelope'></i>
      <a className="text-lime-50 pr-6 flex items-center" href="#services">Contactus</a>
      </div>

       
 
        

      </div>
    

       <div id="header-div" className="flex justify-between w-full bg-white">
        <div  className="logo w-24 h-18">
          <img src={logo_path} alt="BEF LOgo" />
        </div>

        <nav className="menu flex items-center">
          <ul className="flex w-full justify-around gap-2.5 items-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li></li>
          </ul>
        </nav>
        
       </div>

        {/* Animated Banner */}
    <section id="banner-object">
    <VantaBackground>
  <motion.h1
  initial={{ scale: 0.9, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.4 }}
className="text-4xl font-bold text-white text-center"
>
Join the Bharat Economic Forum Industry Conclave 2025
</motion.h1>

  
    </VantaBackground>
  </section>

  <CustomizedTimeline/>
  <MediaExposure/>
  <HeroSection/>
  <MultiActionAreaCard/>
  <ContactSection/>


      


    </>)
}

export default homepage