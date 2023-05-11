/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { github } from "../../assets";
import { fadeIn } from "../../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("left", "spring", index * 1.5, 1)}>
      <div
        className="w-[360px] bg-tertiary hover:bg-gradient-to-r from-pink-500 to-purple-700 p-5 rounded-2xl sm:w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />
          <div className=" absolute inset-0 flex justify-end card-img_hover m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-full h-full object-contain hover:bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 h-[170px]">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`tewt-[14px] ${tag.color} `}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
