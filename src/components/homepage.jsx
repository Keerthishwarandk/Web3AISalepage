import React from "react";
import logo_path from "../assets/img/logo.png";
import Button from '@mui/material/Button';
// import Countdown from "./Countdown";
import {Link,animateScroll as scroll} from "react-scroll";
import { motion } from "framer-motion";

import MediaExposure from "./MediaExposure";
import CustomizedTimeline from "./CustomizedTimeline";
import HeroSection from "./HeroSection";
import MultiActionAreaCard from "./MultiActionAreaCard";

import ContactSection from "./ContactSection";
import VantaBackground from  './VantaBackground';



import FeaturedSpeakers from "./FeaturedSpeakers";
import PastConclaves from "./PastConclaves";
import Testimonials from "./Testimonials";
import WhyAttend from "./WhyAttend";
import WhoShouldAttend from "./WhoShouldAttend";
import EventSchedule from "./EventSchedule";
import DelegatePasses from "./DelegatePasses";
import VenueInfo from "./VenueInfo";
import Partners from "./Partners";
import RegisterNow from "./RegisterNow";

const Homepage = () => {
  return (
    <>
      <div className="contactheader flex items-center justify-between h-10 w-full bg-purple-950">
        <p className="text-lime-50 pl-6">
          <span className="text-base font-semibold">Viksit Bharat by 2047 </span>
          <span className="text-sm font-normal">Innovate 💡, Collaborate 🤝, Celebrate 🎉</span>
        </p>
        <div className="contact-us flex items-center">
          <i className='bx bx-envelope'></i>
         
           <Link className="text-lime-50 pr-6 flex items-center"  activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact Us</Link>
        </div>
      </div>





      <div id="header-div" className="flex justify-between w-full bg-white">
        <div className="logo w-24 h-18">
          <img src={logo_path} alt="BEF Logo" />
        </div>

        <nav className="menu flex items-center">
          <Link activeClass="active" to="event" spy={true} smooth={true} offset={-70} duration={500}>Event</Link>
          <Link activeClass="active" to="delegate" spy={true} smooth={true} offset={-70} duration={500}>Delegate</Link>
          <Link activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
        </nav>
      </div>

      {/* Animated Banner */}
      <section id="banner-object" className="mb-12">
        <VantaBackground>
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-6xl font-bold text-white text-center p-8"
          >
            Join the Bharat Economic Forum Industry Conclave 2025
          </motion.h1>
        </VantaBackground>
      </section>

      {/* Existing Components */}
      <CustomizedTimeline />
      <MediaExposure />
      <HeroSection />
      <MultiActionAreaCard />

      <FeaturedSpeakers />
      <PastConclaves />
      <Testimonials />
      <WhyAttend />
      <WhoShouldAttend />
      <EventSchedule />
      <section id="delegate">  <DelegatePasses /></section>
      <section id="event">   <VenueInfo /></section>
   
    
    
      <Partners />
       <section id="contact">   <ContactSection /></section>
      <RegisterNow />



 
    
    </>
  );

}


export default Homepage;