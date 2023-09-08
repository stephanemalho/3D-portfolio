import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import { styles } from "../styles";
import { navLinks, socialLinks } from "../constants";
import { stephane, menu, close, curriculum } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(false);
  const [toggleLink, setToggleLink] = useState(false);
  const [anchor, setAnchor] = useState("#hero");
  const [copied, setCopied] = useState("");

  const handleCopy = (link) => {
    if (link.name === "Curriculum Vitae") {
      // Télécharger le fichier PDF
      const downloadLink = document.createElement("a");
      downloadLink.href = curriculum;
      downloadLink.download = "curriculum.pdf";
      downloadLink.click();
    } else {
      setCopied(link.title);
      navigator.clipboard.writeText(link.title);
      setTimeout(() => setCopied(""), 3000);
    }
  };

  const handleClickName = () => {
    if (anchor === "#hero") {
      setAnchor("#temoignages");
    } else {
      setAnchor("#hero");
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-[100vw] flex items-center py-5 fixed top-0 z-20 bg-primary opacity-95`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href={anchor}
          className="flex items-center justify-center w-11 h-11 mr-1 hover:bg-gradient-to-r from-pink-500 to-purple-700 rounded-full"
        >
          <img
            src={stephane}
            alt="stéphane"
            className="w-9 h-9 object-cover rounded-full "
            title="photo de profile"
            onClick={handleClickName}
          />
        </a>
        <div className="flex justify-center items-center cursor-pointer">
          <p
            className="text-white text-[18px] font-bold flex"
            onClick={() => setToggleLink(!toggleLink)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setToggleLink(!toggleLink);
              }
            }}
            tabIndex={0}
          >
            Documents&nbsp;<span className="sm:block hidden">&nbsp;Steph</span>
          </p>
          <div
            className={`${
              !toggleLink ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-l`}
          >
            <ul className="list-none flex sm:flex flex-col gap-4 justify-end items-start">
              {socialLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    activeLink === link.title ? "text-white" : "text-secondary"
                  } flex flex-row hover:text-white transition duration-300 ease-in-out text-[18px] font-meduim`}
                  onClick={() => {
                    setToggleLink(!toggle);
                    setActiveLink(link.title);
                  }}
                  onKeyDown={() => {
                    setActiveLink(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>
                    <span className="text-white cursor-text">{link.name}</span>
                    {": "}
                    <span className="cursor-text">{link.title} </span>
                    {link.title === "CV au format PDF" ? (
                      <div onClick={() => handleCopy(link)}>
                        <AiOutlineDownload
                          title={`Télécharger ${link.title}`}
                          className="w-[20px] h-[20px] object-contain cursor-pointer"
                          tabIndex={toggleLink ? 0 : -1}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleCopy(link);
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <img
                        title={`Copier ${link.title}`}
                        className="w-[20px] h-[20px] object-contain cursor-pointer"
                        onClick={() => handleCopy(link)}
                        src={copied === link.title ? link.copied : link.copy}
                        alt={link.name}
                        tabIndex={toggleLink ? 0 : -1}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleCopy(link);
                          }
                        }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white transition duration-300 ease-in-out cursor-pointer text-[18px] font-meduim cursor-pointor`}
              onClick={() => {
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] ojbject-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-l`}
          >
            <ul className="list-none flex sm:flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white transition duration-300 ease-in-out cursor-pointer text-[18px] font-meduim cursor-pointor`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
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
