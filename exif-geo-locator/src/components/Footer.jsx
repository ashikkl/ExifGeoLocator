import React from "react";
import "../scss/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <div className="text prevent-select">
        <div> &copy;{Date().split(` `)[3]} Ashik K L</div>
        <div>All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
