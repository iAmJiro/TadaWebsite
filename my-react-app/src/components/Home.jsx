import React, { useEffect, useState } from "react";
import "tailwindcss";
import "../App.css";
import Navbar from "./Navbar";
import { motion } from "framer-motion";

function Home() {
  const [animationDone, setAnimationDone] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [showCVPlaceholder, setShowCVPlaceholder] = useState(false);
  const [containerHeight, setContainerHeight] = useState("100vh");
  const [homePosition, setHomePosition] = useState(7); // Default position
  const [buttonPosition, setButtonPosition] = useState("");

  useEffect(() => {
    document.body.style.overflow = animationDone ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [animationDone]);

  const handleButtonPosition = () => {};

  const handleShowHomeOnly = () => {
    setShowPlaceholder(false);
    setShowCVPlaceholder(false);
    setHomePosition(7);
    setContainerHeight("100vh"); // 🔹 Reset height when Home is shown
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToPaint = () => {
    setShowCVPlaceholder(false);

    const isMobile = window.innerWidth <= 768;

    setTimeout(() => {
      setShowPlaceholder(true);
      setHomePosition(4);

      if (isMobile) {
        setContainerHeight("200vh"); // Make sure the container is tall enough
        const target = document.querySelector(".homeMotherDiv2");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({
            top: window.innerHeight * 1.3,
            behavior: "smooth",
          });
        }
      } else {
        setContainerHeight("100vh");
      }
    }, 400);
  };

  return (
    <div className="theMotherLand" style={{ height: containerHeight }}>
      {/* Home Section - Smoothly moves up when Paint is pressed */}
      <motion.div
        className="homeMotherDiv1"
        initial={{ opacity: 0, top: "7em" }}
        animate={{ opacity: 1, top: `${homePosition}em` }}
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
          <motion.div
            className="homeName"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Liam Chan
          </motion.div>

          <motion.h1
            className="homeCaption"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Creative
          </motion.h1>

          <div className="navigationBar">
            <div className="navigationLeftSide">
              <img src="../img/Search.png" alt="" className="searchIcon" />
            </div>
            <div className="navigationRightSide">
              <h1 className="navigationText">Navigation</h1>
            </div>
          </div>

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
            },
            {
              className: "instagramButton",
              img: "instagramfromfigma.png",
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
              <a
                className={className}
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button}
              </a>
            ) : (
              button
            );
          })}

          {/* Description */}
          <motion.h1
            className="homeBreakLine hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <br />
          </motion.h1>

          <motion.h1
            className="homeCaptionParagraph hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Hey, I am Liam, a freelance videographer and editor with software
            knowledge of Adobe products.
          </motion.h1>

          <motion.h1
            className="homeCaptionParagraph2 hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.6 }}
          >
            Contact me at lmasatoc@gmail.com
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Placeholder GIF - Animated fade-in & fade-out */}
      <div className="homeMotherDiv2">
        <motion.div
          className="videoLeft"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPlaceholder ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginTop: "2em" }}
        >
          <motion.img
            src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif"
            alt="Placeholder GIF"
            initial={{ opacity: 0 }}
            animate={{ opacity: showPlaceholder ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded shadow-lg"
          />
        </motion.div>

        <motion.div
          className="captionRight"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPlaceholder ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ marginTop: "2em" }}
        >
          <h1 className="captionText">
            Videos commissioned from multiple creatives; showcasing multiple
            skill I learned
          </h1>
        </motion.div>
      </div>

      <motion.div
        className="videoLeft"
        id="cv"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ marginTop: "2em" }}
      >
        <h1>Did you see the CV?</h1>
      </motion.div>
    </div>
  );
}

export default Home;
