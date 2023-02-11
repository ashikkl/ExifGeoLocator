import "../scss/AddBar.scss";
import EXIF from "exif-js";
import React from "react";

function AddBar() {
  function handleChange({
    target: {
      files: [file],
    },
  }) {
    if (file && file.name) {
      EXIF.getData(file, function () {
        var exifData = EXIF.pretty(this);
        if (exifData) {
          let lat = EXIF.getTag(this, "GPSLatitude");
          let latref = EXIF.getTag(this, "GPSLatitudeRef");

          let lon = EXIF.getTag(this, "GPSLongitude");
          let lonref = EXIF.getTag(this, "GPSLongitudeRef");

          let latitude = "";
          let longitude = "";

          latitude = lat[0] + " " + lat[1] + " " + lat[2] + ' ' + latref;
          longitude = lon[0] + " " + lon[1] + " " + lon[2] + ' ' + lonref;
          return;
        } else {
          console.log("No EXIF data found in image '" + file.name + "'.");
        }
      });
    }
  }

  return (
    <div id="uploadBar" className="hidden">
      <input
        type="file"
        id="file"
        accept=".jpg, .png, .heif, .heic"
        onChange={handleChange}
      />
    </div>
  );
}

export default AddBar;