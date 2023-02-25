import React from 'react';
import '../scss/Header.scss'

function clrAll(){
  localStorage.setItem('data',[]);
  window.location.reload(false);
}

function Header() {
  return (
    <div className="header">
      <div className="head prevent-select">
        <img src={process.env.PUBLIC_URL + "/logo192.png"}  alt='logo' fluid id='logo'/>{" "}
        ExifGeoLocator
      </div>
      <button className="clr" onClick={clrAll}>
        Clear All
      </button>
    </div>
  );
}


export default Header;