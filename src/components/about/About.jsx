import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import ServiceCard from "./ServiceCard";

// eslint-disable-next-line react-refresh/only-export-components
const About = () => {
  return (
    <>
      <motion.div variant={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Aperçu.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        Je suis un développeur frontend avec une passion pour la création de sites web réactifs et fonctionnels. J&apos;ai de l&apos;expérience dans la création de
        sites et applications Web utilisant JavaScript, React, Typescript et
        également Node.js, Express, MongoDB. J&apos;apprends vite et je suis ouvert à élargir mes compétences.
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
export default SectionWrapper(About, "about");
