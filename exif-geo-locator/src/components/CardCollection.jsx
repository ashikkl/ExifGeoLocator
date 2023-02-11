import "../scss/CardCollection.scss";
import Card from "./Card";
import React from "react";
import data from './location/data.json'

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

let pos = ParseDMS(data.lat + " " + data.long).Position;

function CardCollection() {
  return (
    <div className="cards">
      <Card
        url={"https://maps.google.com/maps?q=" + pos + "&z=15&output=embed"}
      />
    </div>
  );
}

export default CardCollection;
