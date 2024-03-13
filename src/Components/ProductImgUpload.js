import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {

  const [selectedImage, setSelectedImage] = useState("");

  const handleFile = () => {
    console.log("Image Uploading....")
    const formData = new FormData();
    formData.append("file", selectedImage);

    fetch("http://localhost:8080/file/upload", {
        method: 'POST',
        body: formData,
        dataType: "jsonp"
    })
    .then(response => response.text())
    .then((imageName) => {
        console.log('Image uploaded successfully:', imageName);
        onImageUpload(imageName); 
      })
    .catch((error) => {
        console.error('Error uploading image:', error);
      });
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
          <button className="btn btn-primary" onClick={handleFile}>Upload</button>
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