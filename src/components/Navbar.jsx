import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {
  stephane,
  menu,
  close
} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [anchor, setAnchor] = useState("");

  const handleStephaneClick = () => {
    if (anchor === "#hero") {
      setAnchor("#temoignages");
    } else {
      setAnchor("#hero");
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary opacity-95`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a href={anchor}>
            <img src={stephane} alt="stéphane" className="w-9 h-9 object-cover mr-1  hover:bg-gradient-to-r from-pink-500 to-purple-700 rounded-full"  title="photo de profile" onClick={handleStephaneClick}/>
        </a>
        <Link
          to="/"
          className="flex items-left "
          onClick={() => {
            setActive();
            window.scrollTo(0, 0);
          }}
          title="Aller en haut de la page"
        >
          <p className="text-white text-[18px] font-bold cursor-pointor flex">Stephane&nbsp;<span className="sm:block hidden">|&nbsp;Malho</span></p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={
              `${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white transition duration-300 ease-in-out cursor-pointer text-[18px] font-meduim cursor-pointor`
            }
            onClick={() => {setActive(link.title)}}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))} 
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img 
            src={toggle ? close : menu } 
            alt="menu" 
            className="w-[28px] h-[28px] ojbject-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} 
          />
          <div className={`${ !toggle ? "hidden" : "flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-l`}>
          <ul className="list-none flex sm:flex flex-col gap-4 justify-end items-start">
          {navLinks.map((link) => (
            <li 
            key={link.id}
            className={
              `${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white transition duration-300 ease-in-out cursor-pointer text-[18px] font-meduim cursor-pointor`
            }
            onClick={() => {
              setToggle(!toggle);
              setActive(link.title)
            }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))} 
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
