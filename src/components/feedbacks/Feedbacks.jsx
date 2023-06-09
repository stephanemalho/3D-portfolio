import { motion } from "framer-motion";

import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import { textVariant } from "../../utils/motion";
import { testimonials } from "../../constants";
import FeedbackCard from "./FeedBackCard";



// eslint-disable-next-line react-refresh/only-export-components
const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Ce que mes collègues et clients disent de moi</p>
          <h2 className={styles.sectionHeadText}>Avis.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Feedbacks, "temoignages");
