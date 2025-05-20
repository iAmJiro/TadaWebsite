import React, { useEffect, useRef, useState } from "react";
import "tailwindcss";
import "../App.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const paintSectionRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = animationDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [animationDone]);

  const handleScrollToPaint = () => {
    if (paintSectionRef.current) {
      paintSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="theMotherLand">
      <motion.div
        className="homeMotherDiv1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setAnimationDone(true)}
      >
        {/* Profile Image */}
        <motion.div
          className="firstHomeDiv"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src="../img/liam.jpg"
            className="homeProfilePicture"
            alt="Liam"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Info & Buttons */}
        <motion.div
          className="secondHomeDiv"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h1
            className="homeName"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Liam Chan
          </motion.h1>

          <motion.h1
            className="homeCaption"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Creative
          </motion.h1>

          {/* Buttons */}
          {[
            { className: "homeButton", img: "homelogo.png" },
            { className: "paintButton", img: "paintlogo.png" },
            { className: "cvButton", img: "paintlogo.png" },
            {
              className: "instagramButton",
              img: "instagram.png",
              link: "https://www.instagram.com/louisthugs/?hl=en",
            },
            {
              className: "linkedinButton",
              img: "linkedin.png",
              link: "https://www.linkedin.com/in/liam-chan-26b3b825b/",
            },
          ].map(({ className, img, link }, i) => {
            const isPaint = className === "paintButton";
            const button = (
              <motion.button
                key={i}
                className={`${className} w-40 h-40 border-2 border-blue flex items-center justify-center`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                onClick={isPaint ? handleScrollToPaint : undefined}
              >
                <img src={`../img/${img}`} alt="" />
              </motion.button>
            );

            return link ? (
              <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                {button}
              </a>
            ) : (
              button
            );
          })}

          {/* Description */}
          <motion.h1
            className="homeBreakLine"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <br />
          </motion.h1>

          <motion.h1
            className="homeCaptionParagraph"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Hey, I am Liam, a freelance videographer and editor with software
            knowledge of Adobe products.
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Placeholder image section */}
      <div
        ref={paintSectionRef}
        className="homeMotherDiv2 flex justify-center items-center mt-20"
      >
        <img
          src="https://via.placeholder.com/600x400"
          alt="Placeholder"
          className="rounded shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
