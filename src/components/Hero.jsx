import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" id="hero">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-clip bg-gradient-to-r from-pink-400 via-violet-700 to-violet-700" />
          <div className="w-1 sm:h-80 h-40 violet-gradient " />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, je suis{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400  to-violet-700">
              Stéphane
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Je développe des applications web avec ReactJS, NextJS,{" "}
            <span className="sm:block hidden">
              {" "}
              NodeJS, ExpressJS, MongoDB,
            </span>{" "}
            et plus.
          </p>
        </div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
