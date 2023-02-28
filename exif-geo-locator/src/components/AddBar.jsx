import "../scss/AddBar.scss";
import EXIF from "exif-js";
import React from "react";

function AddBar() {
  function handleChange(files) {
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      async function compressImage(blobImg, percent) {
        let bitmap = await createImageBitmap(blobImg);
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        ctx.drawImage(bitmap, 0, 0);
        let dataUrl = canvas.toDataURL("image/jpeg", percent / 100);
        return dataUrl;
      }

      if (file && file.name) {
        EXIF.getData(file, function () {
          var exifData = EXIF.pretty(this);
          if (exifData) {
            if (EXIF.getTag(this, "GPSLatitude")) {
              let lat = EXIF.getTag(this, "GPSLatitude");
              let latref = EXIF.getTag(this, "GPSLatitudeRef");
              let lon = EXIF.getTag(this, "GPSLongitude");
              let lonref = EXIF.getTag(this, "GPSLongitudeRef");

              let latitude = "";
              let longitude = "";

              latitude = `${lat[0]} ${lat[1]} ${lat[2]} ${latref}`;
              longitude = `${lon[0]} ${lon[1]} ${lon[2]} ${lonref}`;

              var myDat = localStorage["data"];
              var stored = localStorage["data"];
              if (stored) myDat = JSON.parse(stored);
              else myDat = [];
              const reader = new FileReader();

              reader.readAsDataURL(file);
              reader.addEventListener("load", () => {
                const cImg = async () => {
                  const a = await compressImage(file, 75);

                  const data = {
                    id: myDat.length + 1,
                    lat: latitude,
                    long: longitude,
                    file: a,
                    fileName: file.name,
                  };

                  try {
                    localStorage.setItem(
                      "data",
                      JSON.stringify([...myDat, data])
                    );
                  } catch (error) {
                    alert("Local Storage Full " + error);
                  }
                };
                cImg();
                window.location.reload(false);
              });
            } else {
              alert("No Location Data Found in '" + file.name + "'.");
            }
          } else {
            alert("No EXIF data found in image '" + file.name + "'.");
          }
        });
      }
    }
  }

  return (
    <div id="uploadBar" className="hid hidden ">
      <input
        type="file"
        id="file"
        className="custom-file-input"
        aria-label="File browser"
        accept="image/*"
        multiple={true}
        onChange={(file) => {
          handleChange(file.target.files);
        }}
      />
      <label htmlFor="file">Select file</label>
    </div>
  );
}

export default AddBar;
