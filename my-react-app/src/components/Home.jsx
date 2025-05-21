import React, { useEffect, useRef, useState } from "react";
import "tailwindcss";
import "../App.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showCVPlaceholder, setShowCVPlaceholder] = useState(false);

  const [homePosition, setHomePosition] = useState(7); // Default position

  useEffect(() => {
    document.body.style.overflow = animationDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [animationDone]);

  const handleScrollToPaint = () => {
    setShowCVPlaceholder(false); // Hide CV section first
    setTimeout(() => {
      setShowPlaceholder(true); // Show Paint section
      setHomePosition(4); // Move Home section UP
    }, 400); // Smooth transition timing
  };

  // 🔹 New function: behaves like Paint button but for CV section
  const handleShowCVPlaceholder = () => {
    setShowPlaceholder(false); // Hide Paint section first
    setTimeout(() => {
      setShowCVPlaceholder(true); // Show CV section
      setHomePosition(4); // Move Home section UP
    }, 400); // Smooth transition timing
  };

  // 🔹 Updated Home function to reset BOTH placeholders
  const handleShowHomeOnly = () => {
    setShowPlaceholder(false); // Hide Paint section
    setShowCVPlaceholder(false); // Hide CV section
    setHomePosition(7); // Move Home section BACK to original position
  };

  return (
    <div className="theMotherLand">
      {/* Home Section - Smoothly moves up when Paint is pressed */}
      <motion.div
        className="homeMotherDiv1"
        initial={{ opacity: 0, top: "7em" }}
        animate={{ opacity: 1, top: `${homePosition}em` }} // Animate position change
        transition={{ duration: 0.5, ease: "easeOut" }}
        onAnimationComplete={() => setAnimationDone(true)}
      >
        {/* Profile Image */}
        <motion.div
          className="firstHomeDiv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.img
            src="../img/liam.jpg"
            className="homeProfilePicture"
            alt="Liam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Info & Buttons */}
        <motion.div
          className="secondHomeDiv"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.h1
            className="homeName"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Liam Chan
          </motion.h1>
          <motion.h1
            className="homeBreakLineForName"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div></div>
          </motion.h1>

          <motion.h1
            className="homeCaption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Creative
          </motion.h1>
          <motion.h1
            className="homeBreakLineForCaption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <div></div>
          </motion.h1>

          {/* Buttons */}
          {[
            {
              className: "homeButton",
              img: "homelogo.png",
              action: handleShowHomeOnly,
            },
            {
              className: "paintButton",
              img: "paintlogo.png",
              action: handleScrollToPaint,
            },
            {
              className: "cvButton",
              img: "cv.png",
              action: handleShowCVPlaceholder,
            },
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
          ].map(({ className, img, link, action }, i) => {
            const button = (
              <motion.button
                key={i}
                className={`${className} w-40 h-40 border-2 border-blue flex items-center justify-center`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                onClick={action}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <br />
          </motion.h1>

          <motion.h1
            className="homeCaptionParagraph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Hey, I am Liam, a freelance videographer and editor with software
            knowledge of Adobe products.
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Placeholder GIF - Animated fade-in & fade-out */}
      <div className="homeMotherDiv2">
        <motion.div
          className="videoLeft"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPlaceholder ? 1 : 0 }} // Fade in/out animation
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          style={{ marginTop: "2em" }}
        >
          <motion.img
            src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            alt="Placeholder GIF"
            initial={{ opacity: 0 }}
            animate={{ opacity: showPlaceholder ? 1 : 0 }} // Smooth fade animation
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded shadow-lg"
          />
        </motion.div>
        <motion.div
          className="captionRight"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPlaceholder ? 1 : 0 }} // Fade in/out animation
          transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
          style={{ marginTop: "2em" }}
        >
          <h1 className="captionText">
            Videos commissioned from multiple creatives; show casing multiple
            skills I learned
          </h1>
        </motion.div>
      </div>
      <motion.div
        className="cvPlaceholder"
        initial={{ opacity: 0 }}
        animate={{ opacity: showCVPlaceholder ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        style={{ marginTop: "2em" }}
      >
        <h2>CV Section Coming Soon...</h2>
      </motion.div>
    </div>
  );
}

export default Home;
