import React, { useState } from "react";

const ImageUploader = () => {

  const [selectedImage, setSelectedImage] = useState("");

  const handleFile = () => {
    console.log("hello world")
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://localhost:8080/file/upload", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
    })
    .then(response => response.text())
    .then(text => {
        console.log(text)
    })
  }

  return (
    <div>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button className="btn btn-danger" onClick={() => setSelectedImage(null)}>Remove</button>
          <button className="btn btn-primary" onClick={() => handleFile()}>Upload</button>
        </div>
      )}
      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default ImageUploader;