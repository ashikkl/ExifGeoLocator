import "../scss/CardCollection.scss";
import Card from "./Card";
import React from "react";

function ParseDMS(input) {
  var parts = input.split(" ");
  var lat = ConvertDMSToDD(parts[0], parts[1], parts[2], parts[3]);
  var lng = ConvertDMSToDD(parts[4], parts[5], parts[6], parts[7]);

  return {
    Latitude: lat,
    Longitude: lng,
    Position: lat + "," + lng,
  };
}

function ConvertDMSToDD(degrees, minutes, seconds, direction) {
  var dd = Number(degrees) + Number(minutes) / 60 + Number(seconds) / (60 * 60);

  if (direction === "S" || direction === "W") {
    dd = dd * -1;
  } // Don't do anything for N or E
  return dd;
}
var myDat = localStorage["data"];
var stored = localStorage["data"];
if (stored) myDat = JSON.parse(stored);
else myDat = [];

function createCard(entry) {

  let pos = ParseDMS(entry[0].lat + " " + entry[0].long).Position;
  return (
    <Card
      url={"https://maps.google.com/maps?q=" + pos + "&z=15&output=embed"}
      id={entry[0].id}
      file={entry[0].file}
      fileName={entry[0].fileName}
    />
  );
}


  

function CardCollection() {
  return (
    <div className="cards">
      <h1 id="instruction" className="">
        Upload files
      </h1>
      {myDat.map(createCard)}
    </div>
  );
}

export default CardCollection;
