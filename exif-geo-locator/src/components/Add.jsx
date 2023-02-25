import "../scss/Add.scss";
import { FaPlus } from "react-icons/fa";
import React from "react";

const dataChk = () => {
  if (localStorage["data"]) {
    document.getElementById("instruction").classList.add("hidden");
    document.getElementById("instruction").classList.remove("visible");
  } else {
    document.getElementById("instruction").classList.add("visible");
    document.getElementById("instruction").classList.remove("hidden");
  }
};
dataChk();

let toggle = () => {
  document.getElementById("cards").addEventListener("click", toggleBar);
};

export function toggleBar() {
  toggle();
  let elem = document.getElementById("uploadBar");
  elem.classList.remove("hid");
  if (elem.classList.contains("hidden")) {
    elem.classList.add("visible");
    elem.classList.remove("hidden");
  } else {
    elem.classList.add("hidden");
    elem.classList.remove("visible");
    document
      .getElementById("cards")
      .removeEventListener("click", toggleBar, false);
  }
  if (document.getElementById("toggleButton").classList.contains("inactive")) {
    document.getElementById("toggleButton").classList.add("active");
    document.getElementById("toggleButton").classList.remove("inactive");
  } else {
    document.getElementById("toggleButton").classList.add("inactive");
    document.getElementById("toggleButton").classList.remove("active");
  }
}

function Add() {
  return (
    <button
      id="toggleButton"
      className="addButton inactive"
      onClick={toggleBar}
    >
      <FaPlus />
    </button>
  );
}

export default Add;
