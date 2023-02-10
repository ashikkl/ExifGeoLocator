import "../scss/Add.scss";
import { FaPlus } from "react-icons/fa";

function toggleBar (){
    let elem= document.getElementById('uploadBar');
    elem.classList.add('visible')
    console.log('5');
}

function Add() {
  return (
    <button id="toggleButton " className="addButton" onClick={toggleBar}>
      <FaPlus />
    </button>
  );
}

export default Add;
