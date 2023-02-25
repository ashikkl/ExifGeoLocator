import "../scss/Add.scss";
import { FaPlus } from "react-icons/fa";
import React from "react";

let toggle = () => {
  document.getElementById("cards").addEventListener("click", toggleBar);
};

export function toggleBar() {
  toggle();
  let elem = document.getElementById("uploadBar");
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
