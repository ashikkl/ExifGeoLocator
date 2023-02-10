import "../scss/AddBar.scss";
import React from "react";
import EXIF from "exif-js";

function AddBar() {
  function handleChange({
    target: {
      files: [file]
    }
  }) {
    if (file && file.name) {
      EXIF.getData(file, function() {
        var exifData = EXIF.pretty(this);
        if (exifData) {
          console.log(exifData);
          console.log(EXIF.getTag(this, "Orientation"));
        } else {
          console.log("No EXIF data found in image '" + file.name + "'.");
        }
      });
    }
  }

  return (
    <div id='uploadBar' className="hidden">
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



