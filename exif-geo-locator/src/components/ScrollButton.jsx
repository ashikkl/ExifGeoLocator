import { FaAngleUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "../scss/ScrollButton.scss";

const ScrollButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {showTopBtn && (
        <div className="top-to-btm">
          <FaAngleUp className="icon-style" onClick={goToTop} />
        </div>
      )}
    </div>
  );
};

export default ScrollButton;
