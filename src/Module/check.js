import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ProductImgUpload from '../Components/ProductImgUpload';
import * as yup from 'yup';
import { Formik } from 'formik';

function ContainerOutsideExample() {
  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required()
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (imageName) => {
    setSelectedImage(imageName);
  };
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
    .then((text) => {
        console.log('Image uploaded successfully:', text);
        console.log(text)
      })
    .catch((error) => {
        console.error('Error uploading image:', error);
      });
  }

  const handleSubmit = (productData, {setSubmitting}) => {
    const productDetails = {
        name: productData.name,
        price: productData.price,
        description: productData.description,
         image:selectedImage
    }
    fetch("http://localhost:8080/product/set", {
        headers:{
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(productDetails)
    })
    .then(response => {
        console.log("Data Received " + response)
    })
    .catch((e)=>{
      console.log("error",e);
    })
    .finally(() =>{
      setSubmitting(false);
    })

}
  

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          description: '',
          price: ''
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Col className="mb-3">
              <Form.Group controlId="validationFormik03">
                <Form.Label className="fw-bold">Product name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product name"
                  style={{minWidth:"320px"}}
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="validationFormik04">
                <Form.Label className="fw-bold">Product Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter description"
                  style={{minWidth:"320px"}}
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="validationFormik05">
                <Form.Label className="fw-bold">Product Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  style={{minWidth:"320px"}}
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  isInvalid={!!errors.price}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.price}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
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
              </Form.Group>
            </Col>

            <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
              Add Product
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContainerOutsideExample;
