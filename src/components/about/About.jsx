// import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { StartWrapper } from "../../hoc";
import ServiceCard from "./ServiceCard";

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I am a frontend web developer with a passion for creating beautiful,
        responsive, and functional websites. I have experience in building
        websites and web applications using JavaScript, React, Typescript and
        also Node.js, Express, MongoDB. I am a quick learner and I am always
        looking to expand my skillset.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default StartWrapper(About, "about");
