import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_imdxe4n",
        "template_xjwfrb9",
        {
          from_name: form.name,
          to_name: "Stéphane",
          from_email: form.email,
          to_email: "stephane.malho@gmail.com",
          message: form.message,
        },
        "_8_azjNu5cTrRHJuw"
      )
      .then(() => {
        setLoading(false);
        alert("Your message has been sent successfully");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error.text);
            alert("Message not sent");
          }
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Envoyer moi un mail via ce form</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Votre nom</span>
            <input
              required
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Quel est votre nom?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-${blue[500]} focus:border-${blue[500]}"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Votre courriel</span>
            <input
              required
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="exemple: stephane.malho@gmail.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-${blue_gradient} focus:border-${blue_gradient}"
            />
          </label>
          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              required
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Que souhaitez-vous dire?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-${blue_gradient} focus:border-${blue}"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary focus:outline-none focus:ring-2 focus:ring-${blue_gradient} focus:border-${blue_gradient} hover:opacity-80 hover:bg-slate-600"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 7)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Contact, "contact");
