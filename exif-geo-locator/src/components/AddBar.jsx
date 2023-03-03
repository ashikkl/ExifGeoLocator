import "../scss/AddBar.scss";
import EXIF from "exif-js";
import React from "react";

function AddBar() {
  const [loading, setIsLoading] = React.useState(false);

  function handleChange(files) {
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

    setIsLoading(true);
    for (let i = 0; i < files.length; i++) {
      let file = files[i];

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
                  const setData = async () => {
                    try {
                      localStorage.setItem(
                        "data",
                        JSON.stringify([...myDat, data])
                      );
                    } catch (error) {
                      alert("Local Storage Full " + error);
                    }
                  };
                  setData().finally(() => {
                    if (files.length === i + 1) {
                      setIsLoading(false);
                      window.location.reload(false);
                    }
                  });
                };
                cImg();
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

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("uploadBar").classList.add("highlight");
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    document.getElementById("uploadBar").classList.remove("highlight");
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleChange(e.dataTransfer.files);
    }
  };

  return (
    <div>
      {loading && (
        <div className="ring">
          loading<span></span>
        </div>
      )}
      <div
        id="uploadBar"
        className=" hid hidden "
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <p>
          <strong>Drag and drop or</strong>
        </p>
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
    </div>
  );
}

export default AddBar;
